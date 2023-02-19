import { Category } from '../../src/models/enums/Category'
import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'

const data = {
    id: 'tessellation-unity',
    date: '2022-10',
    primaryVideoName: '1.mp4',
    title: 'Tessellation',
    subtitle:
        'Tessellation in Unity, both with Cg for Surface Shaders and HDRP with Compute Shader',
    implementationDetails: [
        'In Built-in RP using Surface Shader and the Hull/Domain/Geometry shader stages, using the #pragma directive for tessellation.',
        'Exploring limitations of the Metal graphics API for geometry shader stages, and the preferred Compute Shader way of doing tessellation.',
        'Implementing the baked in tessellation in the HDRP.',
    ],
    tags: [Tag.BuiltInRP, Tag.HDRP, Tag.Tessellation],
    technology: Technology.UnityEngine,
    category: Category.Shaders,
}

export default data
