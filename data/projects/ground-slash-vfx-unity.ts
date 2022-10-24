import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'ground-slash-vfx-unity',
    date: '2022-9',
    videosNames: [
        'thumbnail.mp4',
        '13-finished.mp4',
        '12-spawn-debris-gravity.mp4',
        '11-debris-cell-fracture.mp4',
        '10-ground-shooter-script.mp4',
        '9-first-person-character-controller.mp4',
        '8-decals.mp4',
        '7-spawn-trail.mp4',
        '6-spawn-over-distance.mp4',
        '5-gradient-fade.mp4',
        '4-mesh-output.mp4',
        '3-slash-model.mp4',
        '2-uv-maps.mp4',
        '1-model-uv-map.mp4',
    ],
    youtubeVideoIds: ['pybsA5K_S-c'],
    title: 'Ground Slash VFX',
    subtitle: 'With VFX Graph in Unity for URP',
    implementationDetails: [
        'Modelling of the 3D Meshes for the Slash and the Debris.',
        'UV Mapping for the gradient texture of the Slash mesh.',
        'Utilize VFX Graph',
        'Spawning particles over distance, so the VFX leaves a trail of debris.',
        'Decals to leave a burning effect on the ground/geometry.',
        'Programming to snap the VFX to the geometry it goes over, to make it adjust dynamically to it.',
        'Debris with random velocities, gravity and collision with plane.',
        'First Person Character Controller with Input System to simulate the player using the VFX.',
    ],
    tags: [Tag.VFXGraph, Tag.URP, Tag.VFX, Tag.Unity],
    technology: Technology.UnityEngine,
    cardConfig: {
        backgroundSize: '90%',
        backgroundPosition: '20px -1px',
        gradientColor: 'rgb(134, 60, 0)',
    },
})

export default data
