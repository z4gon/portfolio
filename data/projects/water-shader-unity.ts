import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'
import { Tag } from '../tags'

const data: ProjectData = generateProjectData({
    id: 'water-shader-unity',
    date: '2022-7',
    thumbnailImageName: 'thumbnail.gif',
    imagesNames: [
        'cliff.gif',
        'lake.gif',
        'water_waves.gif',
        'water_depth_colored.gif',
        'water_depth_refracted.gif',
        'water_refraction.gif',
        'water_foam.gif',
        'water_depth.gif',
        'water_colors.gif',
    ],
    youtubeVideoIds: ['ag5X-ObzOY8', '0AfmcD5DlXs', 'S920GVHesBM'],
    title: 'Water Shader',
    subtitle: 'With Shader Graph in Unity URP',
    description: [
        'Water shader with dynamic configurations, which can simulate several environmental effects.',
    ],
    implementationDetails: [
        'Water depth effect using Scene Depth node (Camera Depth Buffer) and Screen Position node (Fragment Position)',
        'Refractions using Screen Color node to render distorted objects behind the water, using Normals generated from height from a gradient noise.',
        'Foam generated using the Scene Depth node and a gradient noise.',
        'Waves achieved with geometry displacement, adding Normals multiplied by a gradient noise, effectively deforming the fragment geometry.',
    ],
    tags: [Tag.ShaderGraph, Tag.URP, Tag.Unity, Tag.VFX],
    cardConfig: {
        backgroundSize: '100%',
        backgroundPosition: '0px 0px',
        gradientColor: 'rgb(0, 83, 157)',
    },
})

export default data
