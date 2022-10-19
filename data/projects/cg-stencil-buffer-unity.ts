import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'
import { Tag } from '../tags'

const data: ProjectData = generateProjectData({
    id: 'cg-stencil-buffer-unity',
    date: '2022-10',
    thumbnailImageName: 'thumbnail.gif',
    previewImageName: 'thumbnail.gif',
    imagesNames: ['thumbnail.gif', '1.png'],
    title: 'X-Ray Stencil Buffer',
    subtitle:
        'X-Ray shader using the stencil buffer in Unity 2021.3.10f1 Built-in RP written in the Cg programming language',
    implementationDetails: [
        'In Built-in RP using Surface Shader and the Hull/Domain/Geometry shader stages, using the #pragma directive for tessellation.',
    ],
    tags: [Tag.Cg, Tag.BuiltInRP, Tag.Unity],
    cardConfig: {
        backgroundSize: '100%',
        backgroundPosition: '-5px 0px',
        gradientColor: 'rgb(84, 119, 155)',
    },
})

export default data
