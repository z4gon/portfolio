import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'
import { Tag } from '../tags'
import { Technology } from '../technology'

const data: ProjectData = generateProjectData({
    id: 'cg-clipping-shader',
    date: '2022-10',
    thumbnailImageName: 'thumbnail.gif',
    imagesNames: ['2.gif', '3a.gif', '3b.gif'],
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
        backgroundSize: '100%',
        backgroundPosition: '3px -6px',
        gradientColor: 'rgb(65, 107, 145)',
    },
})

export default data
