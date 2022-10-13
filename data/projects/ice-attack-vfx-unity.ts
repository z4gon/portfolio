import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'
import { Tag } from '../tags'

const data: ProjectData = generateProjectData({
    id: 'ice-attack-vfx-unity',
    date: '2022-9',
    thumbnailImageName: 'thumbnail.gif',
    imagesNames: [
        'thumbnail.gif',
        '8-waves.gif',
        '7-snow-spike-vfx.gif',
        '6-snow-mesh.gif',
        '5-spikes.gif',
        '4-spike-test.gif',
        '3-dissolve-fresnel.gif',
        '2-spike-mesh.gif',
        '1-ground-textures.gif',
    ],
    youtubeVideoIds: ['h4akS-e__9E'],
    title: 'Ice Attack VFX',
    subtitle: 'With VFX Graph and Shader Graph in Unity',
    description: [
        'Ice Attack VFX with 3 waves of bursts, including textures, snow and spike meshes, randomness at spawn and dissolve animation. Color and fresnel fully configurable.',
    ],
    implementationDetails: [
        'Burst of 3 Delayed Waves utilizing Sub Graphs in VFX Graph.',
        'Ground Texture particles.',
        'Snow and Spike Meshes particles, with dissolve/fresnel shader.',
        'Random spawn position and rotation of particles.',
        'Spikes tilt angle increases in each wave of the burst, also fully configurable',
        'Configurable colors, fresnel power, particles size and count.',
        'Dissolve and Fresnel shader implemented in Shader Graph, and integrated into the particles of VFX Graph utilizing the option for support for VFX Graph',
        '3D Modeling in Blender.',
    ],
    tags: [Tag.VFX, Tag.VFXGraph, Tag.ShaderGraph, Tag.Unity3D],
})

export default data
