import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'
import { Tag } from '../tags'

const data: ProjectData = generateProjectData({
    id: 'tessellation-unity',
    date: '2022-10',
    thumbnailImageName: 'thumbnail.gif',
    previewImageName: 'thumbnail.gif',
    title: 'Tessellation',
    subtitle:
        'Tessellation in Unity, both with Cg for Surface Shaders and HDRP with Compute Shader',
    implementationDetails: [
        'In Built-in RP using Surface Shader and the Hull/Domain/Geometry shader stages, using the #pragma directive for tessellation.',
        'Exploring limitations of the Metal graphics API for geometry shader stages, and the preferred Compute Shader way of doing tessellation.',
        'Implementing the baked in tessellation in the HDRP.',
    ],
    tags: [Tag.BuiltInRP, Tag.HDRP, Tag.Tessellation],
    cardConfig: {
        backgroundSize: '140%',
        backgroundPosition: '5px 0px',
        gradientColor: 'rgb(84, 119, 155)',
    },
})

export default data
