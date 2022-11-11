import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: '3d-animated-character-unity',
    date: '2022-11',
    imagesNames: [
        '34.jpg',
        '33.jpg',
        '32.jpg',
        '31.jpg',
        '30.jpg',
        '26.jpg',
        '24.jpg',
        '23.jpg',
        '20.jpg',
        '16.jpg',
        '15.jpg',
        '14.jpg',
        '10.jpg',
        '9.jpg',
        '6.jpg',
        '4.jpg',
        '3.jpg',
        '1.jpg',
    ],
    youtubeVideoIds: ['Salca9mhmU8'],
    title: '3D Animated Character',
    subtitle: 'Modelled and Animated in Blender, implemented in Unity',
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
    tags: [Tag.Blender, Tag._3DModelling, Tag.Animation, Tag.Unity],
    technology: Technology.UnityEngine,
})

export default data
