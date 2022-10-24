import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'cg-texture-shaders-unity',
    date: '2022-10',
    videosNames: ['3.mp4', '2.mp4', '1d.mp4', '1b.mp4'],
    youtubeVideoIds: ['G0M9q3efZ1M'],
    title: 'Cg Texture Shaders',
    subtitle: 'Written in Cg with ShaderLab, for the Built-in RP in Unity',
    implementationDetails: [
        'Texture manipulation shaders',
        'Using the 2D Property type in ShaderLab and the sampler2D data type in Cg.',
        'Mapping the uv coordinates to a texel using the tex2D function.',
        'Flipping and rotating uv coordinates.',
        'Ripple effect calculated using a radial vector to the center of the quad.',
        'Transition and blending between textures using smoothstep.',
    ],
    tags: [Tag.Cg, Tag.BuiltInRP, Tag.ShaderLab, Tag.Unity, Tag.FragmentShader],
    technology: Technology.UnityEngine,
    cardConfig: {
        backgroundSize: '100%',
        backgroundPosition: '20px -16px',
        gradientColor: 'rgb(0, 69, 157)',
    },
})

export default data
