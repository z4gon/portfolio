import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'cg-clipping-shader',
    date: '2022-10',
    videosNames: ['2.mp4', '3a.mp4', '3b.mp4'],
    title: 'Clipping Pixels',
    subtitle:
        'Clipping pixels in a Built-in RP shader in Unity, using the Cg programming language',
    implementationDetails: [
        'Clipping using Perlin Noise.',
        'Clipping using cosine function of the Object position of vertices.',
        'Shadow casting and culling manipulation.',
        'Implement a basic Lambert lighting model for better graphic appreciation of the clipping effect.',
    ],
    tags: [
        Tag.Cg,
        Tag.BuiltInRP,
        Tag.ShaderLab,
        Tag.Unity,
        Tag.VertexShader,
        Tag.FragmentShader,
    ],
    technology: Technology.UnityEngine,
    cardConfig: {
        backgroundSize: '90%%',
        backgroundPosition: '22px 4px',
        gradientColor: 'rgb(65, 107, 145)',
    },
})

export default data
