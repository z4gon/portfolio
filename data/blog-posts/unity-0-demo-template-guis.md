---
title: 'Unity: Pan, Zoom and Orbit for your Demo Projects'
excerpt: 'UI elements to Orbit, Zoom, Pan and Reset View. GUIs to tweak values for demo purposes.'
coverImageUrl: '/images/blog/unity-0-demo-template-guis/11.jpg'
coverImageSourceUrl: ''
coverVideoUrl: '/videos/blog/unity-0-demo-template-guis/1.mp4'
date: '2023-07-08T00:00:00.000Z'
authorId: 'z4gon'
---

## Source Code

[See Project in GitHub 👩‍💻](https://github.com/z4gon/unity-project-template-urp)

## References

- [Input System Package](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.6/manual/index.html)
- [On-screen Controls](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.0/manual/OnScreen.html)

## Table of Content

- [Source Code](#source-code)
- [References](#references)
- [Table of Content](#table-of-content)
- [Final Result](#final-result)
- [Input Actions](#input-actions)
- [On Screen Controls](#on-screen-controls)
- [Connecting to the CameraMovement](#connecting-to-the-cameramovement)
  - [Input Signals](#input-signals)
  - [Pan View](#pan-view)
  - [Zoom View](#zoom-view)
  - [Orbit View](#orbit-view)
- [GUIs for Playground](#guis-for-playground)

## Final Result

A demo scene with view control to navigate the scene, and a playground to tweak values in the demo.

![Picture](/images/blog/unity-0-demo-template-guis/10.jpg)
![Picture](/images/blog/unity-0-demo-template-guis/11.jpg)

## Input Actions

Using the `Input System Package` from Unity, create an `Input Actions` asset and setup the `Action Maps`.

- Orbit and Pan will be `Action Type` set to `Value`, because we want the actual `Vector2` coming from the analog stick on screen.
- The `Control Type` will be set to `Stick`, so we can bind it to the `Gamepad Stick`.
- The `Binding` will be set to the `Left Stick` and `Right Stick`, correspondingly.

![Picture](/images/blog/unity-0-demo-template-guis/1.jpg)
![Picture](/images/blog/unity-0-demo-template-guis/2.jpg)

## On Screen Controls

We will need to add `Unity UI` Game Objects to represent the analog sticks on the screen.

- Adding the built in `On-Screen Stick` behavior to the image component will do it.
- We need to set the `Control Path` of the on screen stick to `Left Stick [Gamepad]` and `Right Stick [Gamepad]` correspondingly.

![Picture](/images/blog/unity-0-demo-template-guis/3.jpg)
![Picture](/images/blog/unity-0-demo-template-guis/4.jpg)
![Picture](/images/blog/unity-0-demo-template-guis/5.jpg)

## Connecting to the CameraMovement

- The `CameraMovement` classes will listen to events such as `OnLeftStick` or `OnMouseDelta`.
- And internally will use these inputs to move the camera accordingly.

![Picture](/images/blog/unity-0-demo-template-guis/6.jpg)
![Picture](/images/blog/unity-0-demo-template-guis/7.jpg)

### Input Signals

```cs
private void OnLeftStick(InputValue value) => panAmount = value.Get<Vector2>();
private void OnRightStick(InputValue value) => orbitAmount = value.Get<Vector2>();
```

```cs
private void OnMouseDelta(InputValue value)
{
    orbitAmount = isOrbiting ? value.Get<Vector2>() : Vector2.zero;
    panAmount = isPanning ? value.Get<Vector2>() * -1.0f : Vector2.zero;
}

private void OnMouseRightClick(InputValue value)
{
    isOrbiting = value.isPressed;
}

private void OnMouseMiddleClick(InputValue value)
{
    isPanning = value.isPressed;
}

private void OnMouseScroll(InputValue value)
{
    zoomAmount = value.Get<float>();
}
}
```

### Pan View

- Given the `Vector2` amount of movement from the analog stick, we move the camera along its `up/down` and `right/left` directions.
- We also reposition the orbit pivot, which will be used later for orbiting around it.

```cs
private void HandlePan()
{
    if (panAmount == Vector2.zero) { return; }

    var direction = camera.transform.right * panAmount.x + camera.transform.up * panAmount.y;

    camera.transform.position += (direction * panSpeed * Time.deltaTime);
    PositionPivot();
}
```

- The Pivot point is calculated by raycasting the `Camera` forward direction into a `Plane` defined parallel to the ground, at the `Zero` position.

```cs
private void PositionPivot()
{
    var distance = 0.0f;

    var ray = new Ray(cameraTransform.position, cameraTransform.forward);

    if (floorPlane.Raycast(ray, out distance))
    {
        transform.position = ray.GetPoint(distance);
    }
}
```

### Zoom View

- Zooming is easier, just moving the `Camera` along its `forward` direction.

```cs
private void HandleZoom()
{
    if (zoomAmount == 0.0f) { return; }

    var direction = camera.transform.forward;
    camera.transform.position += (direction * zoomAmount * Time.deltaTime);
}
```

### Orbit View

- Orbiting is easy thanks to the `RotateAround` helper function from Unity.
- We make the `Camera` rotate around the pivot position, around the world `up` direction, and around the `right` direction of the camera.

```cs
private void HandleOrbit()
{
    if (orbitAmount == Vector2.zero) { return; }

    cameraTransform.RotateAround(transform.position, Vector3.up, -1.0f * orbitAmount.x * orbitSpeed * Time.deltaTime);
    cameraTransform.RotateAround(transform.position, cameraTransform.right, orbitAmount.y * orbitSpeed * Time.deltaTime);
}
```

## GUIs for Playground

- A set of `GUI` inputs to let you tweak values for the demo.
- These can be hooked up via events to your objects and shaders, to showcase behavior.

![Picture](/images/blog/unity-0-demo-template-guis/8.jpg)
![Picture](/images/blog/unity-0-demo-template-guis/9.jpg)
