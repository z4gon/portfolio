import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'
import { Tag } from '../tags'
import { Technology } from '../technology'

const data: ProjectData = generateProjectData({
    id: 'ground-slash-vfx-unity',
    date: '2022-9',
    thumbnailImageName: 'thumbnail.gif',
    imagesNames: [
        'thumbnail.gif',
        '13-finished.gif',
        '12-spawn-debris-gravity.gif',
        '11-debris-cell-fracture.gif',
        '10-ground-shooter-script.gif',
        '9-first-person-character-controller.gif',
        '8-decals.gif',
        '7-spawn-trail.gif',
        '6-spawn-over-distance.gif',
        '5-gradient-fade.gif',
        '4-mesh-output.gif',
        '3-slash-model.gif',
        '2-uv-maps.gif',
        '1-model-uv-map.gif',
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
        backgroundSize: '100%',
        backgroundPosition: '4px -14px',
        gradientColor: 'rgb(134, 60, 0)',
    },
})

export default data
