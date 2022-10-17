import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'
import { Tag } from '../tags'

const data: ProjectData = generateProjectData({
    id: 'fire-vfx-unity',
    date: '2022-9',
    thumbnailImageName: 'thumbnail.gif',
    imagesNames: [
        'thumbnail.gif',
        'sparks.gif',
        'lighting.gif',
        'color.gif',
        'with-normals.gif',
        'flipbook-animation.gif',
        'size-over-life-wind-and-drag-forces.gif',
        'face-camera.gif',
        'spawn-randomness.gif',
    ],
    youtubeVideoIds: ['mn22mVaAxvg'],
    title: 'Fire VFX',
    subtitle: 'With VFX Graph in Unity for HDRP',
    implementationDetails: [
        'Flip book animation using a sprite sheet, a flip book player and normal maps',
        'Particles with random velocity, angle, lifetime and evolving size over life.',
        'Quads always facing the active camera.',
        'Wind and Drag forces applied over the particles.',
        'Color Multiply and Color over life.',
        'Lighting using a Point Light.',
        'Sparks effect implemented with a secondary particle system.',
    ],
    tags: [Tag.VFX, Tag.VFXGraph, Tag.Unity3D, Tag.HDRP],
    cardConfig: {
        backgroundSize: '130%',
        backgroundPosition: '-75px -20px',
        gradientColor: 'rgb(102, 0, 119)',
    },
})

export default data
