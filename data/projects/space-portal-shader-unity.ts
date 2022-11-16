import { Category } from '../../src/models/enums/Category'
import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'space-portal-shader-unity',
    date: '2022-11',
    videosNames: ['10.mp4'],
    imagesNames: [
        '9.jpg',
        '8.jpg',
        '7.jpg',
        '6.jpg',
        '5.jpg',
        '4.jpg',
        '3.jpg',
        '2.jpg',
        '1.jpg',
    ],
    youtubeVideoIds: ['5qvlXA4RQXM'],
    title: 'Space Portal Shader',
    subtitle:
        'Written in HLSL using Stencil Buffer, in the Built-in RP for Unity',
    implementationDetails: [
        'Modeling the Meshes in Blender, and UV mapping.',
        'Creating the Textures in Affinity, for Masking and doing the Tunnel and Glow VFX.',
        'Mask shader using the Stencil Buffer.',
        'Masking the Tunnel, Hemisphere and Particles using the Stencil Test.',
        'Tunnel implemented animating across the UV.y coordinates.',
        'Particle System with custom Shader using the Stencil Buffer.',
        'Defining the Vertex Color property so Color Over Time works in the Particle System.',
    ],
    tags: [
        Tag.HLSL,
        Tag.BuiltInRP,
        Tag.ShaderLab,
        Tag.VertexShader,
        Tag.FragmentShader,
        Tag.VFX,
    ],
    technology: Technology.UnityEngine,
    category: Category.Shaders,
})

export default data
