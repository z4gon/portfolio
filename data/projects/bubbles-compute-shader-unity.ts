import { Category } from '../../src/models/enums/Category'
import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'bubbles-compute-shader-unity',
    date: '2022-10',
    videosNames: ['9.mp4', '3.mp4', '2.mp4', '1.mp4'],
    imagesNames: ['8.jpg', '7.jpg', '6.jpg', '5.jpg', '4.jpg'],
    primaryVideoName: '10.mp4',
    title: 'Bubbles Compute Shader',
    subtitle: 'Written in HLSL, for the Built-in RP in Unity',
    implementationDetails: [
        'Dispatching a Compute Shader from the C# Code.',
        'Read/Write Render Texture in C# and HLSL to get the output of the Compute Shader execution.',
        'Working with different kernels.',
        'Sharing a Render Texture between kernels.',
        'numthreads(x,y,z), thread ids and thread groups ids.',
        'Rendering circles using the Bresenham Circle algorithm.',
        'Passing values to the Compute Shader, floats, ints, vectors.',
        'Working with ComputeBuffers and StructuredBuffers.',
        'Updating the data in the Structured Buffer using a RWStructuredBuffer.',
    ],
    tags: [Tag.ComputeShader, Tag.HLSL, Tag.BuiltInRP, Tag.Unity],
    technology: Technology.UnityEngine,
    category: Category.ComputeShaders,
})

export default data
