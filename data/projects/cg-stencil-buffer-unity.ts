import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'cg-stencil-buffer-unity',
    date: '2022-10',
    primaryVideoName: '1.mp4',
    title: 'X-Ray Stencil Buffer',
    subtitle:
        'X-Ray shader using the stencil buffer in Unity 2021.3.10f1 Built-in RP written in the Cg programming language',
    implementationDetails: [
        'Using the Stencil Buffer to write a reference value for later check in other shaders.',
        'Culling Front and Back for controlling which faces of the cube should render.',
        'Disabling ZWrite in the quad that acts as the xray window.',
        'Setting Queue=Geometry-1 in the shader to ensure it renders in front of all other objects.',
    ],
    tags: [Tag.Cg, Tag.BuiltInRP, Tag.Unity],
    technology: Technology.UnityEngine,
})

export default data
