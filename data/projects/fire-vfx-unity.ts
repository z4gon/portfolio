import { ProjectData } from '../../src/models/ProjectData'

const data: ProjectData = {
    id: 'fire-vfx-unity',
    date: '2022-9',
    thumbnailUrl: '/images/portfolio/fire-vfx-unity/thumbnail.gif',
    metaImageUrl: '/images/portfolio/fire-vfx-unity/thumbnail.gif',
    imagesUrls: [
        '/images/portfolio/fire-vfx-unity/thumbnail.gif',
        '/images/portfolio/fire-vfx-unity/sparks.gif',
        '/images/portfolio/fire-vfx-unity/lighting.gif',
        '/images/portfolio/fire-vfx-unity/color.gif',
        '/images/portfolio/fire-vfx-unity/with-normals.gif',
        '/images/portfolio/fire-vfx-unity/flipbook-animation.gif',
        '/images/portfolio/fire-vfx-unity/size-over-life-wind-and-drag-forces.gif',
        '/images/portfolio/fire-vfx-unity/face-camera.gif',
        '/images/portfolio/fire-vfx-unity/spawn-randomness.gif',
    ],
    youtubeVideoIds: ['mn22mVaAxvg'],
    title: 'Fire VFX',
    subtitle: 'With VFX Graph in Unity',
    description: [
        'Fire VFX with randomness at spawn, flip book animation, wind and drag forces, configurable color and sparks.',
    ],
    implementationDetails: [
        'Flip book animation using a sprite sheet, a flip book player and normal maps',
        'Particles with random velocity, angle, lifetime and evolving size over life.',
        'Quads always facing the active camera.',
        'Wind and Drag forces applied over the particles.',
        'Color Multiply and Color over life.',
        'Lighting using a Point Light.',
        'Sparks effect implemented with a secondary particle system.',
    ],
    tags: ['Unity3D', 'VFX', 'VFX Graph'],
    gitHubUrl: 'https://github.com/z4gon/fire-vfx-unity',
}

export default data
