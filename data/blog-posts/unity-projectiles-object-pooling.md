---
title: 'Unity: Physics Projectiles, Coroutines and Object Pooling'
excerpt: 'Using Corotuines and Object Pools to instantiate projectiles, and Ribidbodies for simple physics.'
coverImageUrl: '/images/blog/unity-projectiles-object-pooling/2.jpg'
coverImageSourceUrl: ''
date: '2023-06-03T00:00:00.000Z'
authorId: 'z4gon'
---

## References

- [ObjectPool](https://docs.unity3d.com/ScriptReference/Pool.ObjectPool_1.html)
- [ObjectPool Constructor](https://docs.unity3d.com/ScriptReference/Pool.ObjectPool_1-ctor.html)
- [OnDestroy](https://docs.unity3d.com/2017.1/Documentation/ScriptReference/MonoBehaviour.OnDestroy.html)

## Table of Content

- [References](#references)
- [Table of Content](#table-of-content)
- [Projectile: Bullet](#projectile-bullet)
- [ObjectPool: Gun](#objectpool-gun)
- [Player](#player)

---

## Projectile: Bullet

- For now, a simple component that has a `Collider` and a `Rigidbody`.
- The `Rigidbody` will not be kinematic, to be able to use `Velocity`. And will ignore gravity, to follow a straight line.

```cs
public float speed
{
    get { return rigidBody.velocity.z; }
    set { rigidBody.AddForce(transform.forward * value, ForceMode.VelocityChange); }
}
private Rigidbody rigidBody;

private void Awake()
{
    rigidBody = GetComponent<Rigidbody>();
}
```

![Picture](/images/blog/unity-projectiles-object-pooling/1.jpg)

---

## ObjectPool: Gun

- This component will use the `ObjectPool` to store the `Bullet` game objects.
- It will also define a `Coroutine` to periodically fire the gun, and shoot projectiles.

```cs
public Bullet bulletPrefab;
public float bulletsPerSecond;
public float bulletSpeed;
public int defaultBulletsPoolCapacity = 10;
public int maxBulletsPoolSize = 20;
private ObjectPool<Bullet> bulletsPool;
private Coroutine shootCoroutine;

void Awake()
{
    bulletsPool = new ObjectPool<Bullet>(
        createFunc: CreatePooledBullet,
        actionOnGet: OnGetBulletFromPool,
        actionOnRelease: OnReleaseBulletToPool,
        actionOnDestroy: OnDestroyBulletFromPool,
        collectionCheck: true,
        defaultCapacity: defaultBulletsPoolCapacity,
        maxSize: maxBulletsPoolSize
    );
}

public void StartShooting()
{
    shootCoroutine = StartCoroutine(Shoot());
}

public void StopShooting() => StopCoroutine(shootCoroutine);

private IEnumerator Shoot()
{
    while (true)
    {
        var bullet = bulletsPool.Get();

        if (bullet != null)
        {
            bullet.transform.position = transform.position;
            bullet.transform.rotation = transform.rotation;
            bullet.speed = bulletSpeed;
        }

        yield return new WaitForSeconds(1.0f / bulletsPerSecond);
    }
}

private Bullet CreatePooledBullet() => Object.Instantiate(bulletPrefab, transform.position, transform.rotation);
private void OnGetBulletFromPool(Bullet bullet) => bullet.gameObject.SetActive(true);
private void OnReleaseBulletToPool(Bullet bullet) => bullet.gameObject.SetActive(false);
void OnDestroyBulletFromPool(Bullet bullet) => Destroy(bullet.gameObject);
```

![Picture](/images/blog/unity-projectiles-object-pooling/2.jpg)

---

## Player

- The `Player` game object will react to player input, and shoot projectiles.

```cs
public List<Gun> guns = new List<Gun>();

public void OnShootAction(InputAction.CallbackContext context)
{
    if (context.performed)
    {
        StartShooting();
    }
    else if (context.canceled)
    {
        StopShooting();
    }
}

private void StartShooting()
{
    foreach (var gun in guns)
    {
        gun.StartShooting();
    }
}

private void StopShooting()
{
    foreach (var gun in guns)
    {
        gun.StopShooting();
    }
}
```

![Picture](/images/blog/unity-projectiles-object-pooling/3.jpg)
