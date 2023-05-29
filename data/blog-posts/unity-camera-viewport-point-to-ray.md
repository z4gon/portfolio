---
title: 'Unity: Using Camera ViewportPointToRay'
excerpt: '.'
coverImageUrl: '/images/blog/unity-camera-viewport-point-to-ray/1.jpg'
coverImageSourceUrl: ''
coverVideoUrl: '/videos/blog/unity-camera-viewport-point-to-ray/1.mp4'
date: '2023-05-29T00:00:00.000Z'
authorId: 'z4gon'
---

## References

- [Physics.Raycast](https://docs.unity3d.com/ScriptReference/Physics.Raycast.html)
- [Rays from the Camera](https://docs.unity3d.com/Manual/CameraRays.html)
- [Camera.ViewportToScreenPoint](https://docs.unity3d.com/ScriptReference/Camera.ViewportToScreenPoint.html)
- [Gizmos.DrawLine](https://docs.unity3d.com/ScriptReference/Gizmos.DrawLine.html)

## Table of Content

- [References](#references)
- [Table of Content](#table-of-content)
- [Using Raycast](#using-raycast)
- [Drawing Gizmos](#drawing-gizmos)

---

## Using Raycast

The method `ViewportPointToRay` transforms a coordinate in viewport space (0,0) to (1,1) into a ray that starts from the corresponding point in the camera near clip plane and points into the direction coming from the camera transform position.

Using a trigger collider for a plane, you can raycast this ray and find the hit point in the surface.

This allows to generate a shape that corresponds to the camera view, proyected on a surface, even when the camera is tilted.

```csharp
private Camera mainCamera;
private LayerMask raycastLayerMask;
private float raycastMaxDistance = 40;
private Transform[] corners;

private void PositionCorners()
{
    var points = new Vector2[]
    {
        new Vector2(0.0f, 0.0f), // bot left
        new Vector2(1.0f, 1.0f) // top right
    };
    RaycastHit hit;
    Ray ray;

    for (var i = 0; i < points.Length; i++)
    {
        ray = mainCamera.ViewportPointToRay(points[i]);
        if (
            Physics.Raycast(
                ray,
                out hit,
                raycastMaxDistance,
                raycastLayerMask,
                QueryTriggerInteraction.Collide
            )
        )
        {
            corners[i].transform.position = hit.point;
        }
    }
}
```

![Picture](/images/blog/unity-camera-viewport-point-to-ray/3.jpg)

---

## Drawing Gizmos

The gizmos are useful for visualizing the area shape.

```cs
void OnDrawGizmos()
{
    if (corners != null && corners.Length > 1)
    {
        var botLeft = corners[0].transform.position;
        var botRight = new Vector3(-botLeft.x, botLeft.y, botLeft.z);
        var topRight = corners[1].transform.position;
        var topLeft = new Vector3(-topRight.x, topRight.y, topRight.z);

        Gizmos.color = Color.yellow;

        Gizmos.DrawLine(topLeft, topRight);
        Gizmos.DrawLine(botLeft, botRight);
        Gizmos.DrawLine(botLeft, topLeft);
        Gizmos.DrawLine(botRight, topRight);
    }
}
```

![Picture](/images/blog/unity-camera-viewport-point-to-ray/1.jpg)
