import { ProjectData } from '../../src/models/ProjectData'

const data: ProjectData = {
    id: 'ice-attack-vfx-unity',
    date: '2022-9',
    thumbnailUrl: '/images/portfolio/ice-attack-vfx-unity/thumbnail.gif',
    metaImageUrl: '/images/portfolio/ice-attack-vfx-unity/thumbnail.gif',
    imagesUrls: [
        '/images/portfolio/ice-attack-vfx-unity/thumbnail.gif',
        '/images/portfolio/ice-attack-vfx-unity/8-waves.gif',
        '/images/portfolio/ice-attack-vfx-unity/7-snow-spike-vfx.gif',
        '/images/portfolio/ice-attack-vfx-unity/6-snow-mesh.gif',
        '/images/portfolio/ice-attack-vfx-unity/5-spikes.gif',
        '/images/portfolio/ice-attack-vfx-unity/4-spike-test.gif',
        '/images/portfolio/ice-attack-vfx-unity/3-dissolve-fresnel.gif',
        '/images/portfolio/ice-attack-vfx-unity/2-spike-mesh.gif',
        '/images/portfolio/ice-attack-vfx-unity/1-ground-textures.gif',
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
    tags: ['Unity3D', 'VFX', 'VFX Graph', 'Shader Graph'],
    gitHubUrl: 'https://github.com/z4gon/ice-attack-vfx-unity',
}

export default data
