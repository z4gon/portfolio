import { Category } from '../../src/models/enums/Category'
import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'water-shader-unity',
    date: '2022-7',
    videosNames: [
        'cliff.mp4',
        'lake.mp4',
        'water_waves.mp4',
        'water_depth_colored.mp4',
        'water_depth_refracted.mp4',
        'water_refraction.mp4',
        'water_foam.mp4',
        'water_depth.mp4',
        'water_colors.mp4',
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
    tags: [Tag.ShaderGraph, Tag.URP, Tag.VFX, Tag.Unity],
    technology: Technology.UnityEngine,
    category: Category.Shaders,
})

export default data
