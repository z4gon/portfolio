import { ProjectData } from '../../src/models/ProjectData'

const data: ProjectData = {
    id: 'ground-slash-vfx-unity',
    date: '2022-9',
    thumbnailUrl: '/images/portfolio/ground-slash-vfx-unity/thumbnail.gif',
    metaImageUrl: '/images/portfolio/ground-slash-vfx-unity/thumbnail.gif',
    imagesUrls: [
        '/images/portfolio/ground-slash-vfx-unity/thumbnail.gif',
        '/images/portfolio/ground-slash-vfx-unity/13-finished.gif',
        '/images/portfolio/ground-slash-vfx-unity/12-spawn-debris-gravity.gif',
        '/images/portfolio/ground-slash-vfx-unity/11-debris-cell-fracture.gif',
        '/images/portfolio/ground-slash-vfx-unity/10-ground-shooter-script.gif',
        '/images/portfolio/ground-slash-vfx-unity/9-first-person-character-controller.gif',
        '/images/portfolio/ground-slash-vfx-unity/8-decals.gif',
        '/images/portfolio/ground-slash-vfx-unity/7-spawn-trail.gif',
        '/images/portfolio/ground-slash-vfx-unity/6-spawn-over-distance.gif',
        '/images/portfolio/ground-slash-vfx-unity/5-gradient-fade.gif',
        '/images/portfolio/ground-slash-vfx-unity/4-mesh-output.gif',
        '/images/portfolio/ground-slash-vfx-unity/3-slash-model.gif',
        '/images/portfolio/ground-slash-vfx-unity/2-uv-maps.gif',
        '/images/portfolio/ground-slash-vfx-unity/1-model-uv-map.gif',
    ],
    youtubeVideoIds: ['pybsA5K_S-c'],
    title: 'Ground Slash VFX',
    subtitle: 'With VFX Graph in Unity',
    description: [
        'A ground slash attack vfx implemented with a Mesh, decal textures, VFX Graph and some programming. Made in Unity. ',
    ],
    implementationDetails: [
        'Modelling of the 3D Meshes for the Slash and the Debris.',
        'UV Mapping for the gradient texture of the Slash mesh.',
        'Spawning particles over distance, so the VFX leaves a trail of debris.',
        'Decals to leave a burning effect on the ground/geometry.',
        'Programming to snap the VFX to the geometry it goes over, to make it adjust dynamically to it.',
        'Debris with random velocities, gravity and collission with plane.',
        'First Person Character Controller with Input System to simulate the player using the VFX.',
    ],
    tags: ['Unity3D', 'VFX', 'VFX Graph'],
    gitHubUrl: 'https://github.com/z4gon/ground-slash-vfx-unity',
}

export default data
