import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'fire-vfx-unity',
    date: '2022-9',
    videosNames: [
        'thumbnail.mp4',
        'sparks.mp4',
        'lighting.mp4',
        'color.mp4',
        'with-normals.mp4',
        'flipbook-animation.mp4',
        'size-over-life-wind-and-drag-forces.mp4',
        'face-camera.mp4',
        'spawn-randomness.mp4',
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
    tags: [Tag.VFXGraph, Tag.HDRP, Tag.VFX, Tag.Unity],
    technology: Technology.UnityEngine,
    cardConfig: {
        backgroundSize: '90%',
        backgroundPosition: '10px -40px',
        gradientColor: 'rgb(102, 0, 119)',
    },
})

export default data
