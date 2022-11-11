import { Category } from '../../src/models/enums/Category'
import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'grass-compute-shader-unity',
    date: '2022-10',
    videosNames: [
        '11.mp4',
        '10.mp4',
        '12b.mp4',
        '12a.mp4',
        '9.mp4',
        '8.mp4',
        '7b.mp4',
        '7a.mp4',
        '6.mp4',
        '5.mp4',
        '4.mp4',
        '3.mp4',
        '2.mp4',
        '1.mp4',
    ],
    imagesNames: ['blade.jpg'],
    youtubeVideoIds: ['dsd_pxnuODE'],
    title: 'Grass Compute Shader',
    subtitle: 'Procedural Grass System with Compute Shaders in Unity',
    implementationDetails: [
        'Building a procedural mesh for the Grass Blades, setting vertices, normals and indices.',
        'Placing randomly generated grass blades given an extent and a density.',
        'Raycasting over the terrain to place grass following the uneven surface.',
        'Sharing a compute buffer with the grass blades data between the compute shader and the material.',
        'Using GPU Instancing to render all the grass blades.',
        'Parametrizing the wind direction, wind velocity and wind force.',
        'Parametrizing colors for young and old grass.',
        'Using DrawMeshInstancedIndirect to draw procedurally all the meshes using GPU Instancing.',
        'Perlin noise to calculate the amount of displacement each grass blade needs to have to simulate wind.',
        'Using Translation and Rotation Matrices to position the vertices of the mesh in World Space and Clip Space.',
        'Displacing the vertices of the grass blade proportionally to the UV Y coordinate, to make the base stay still.',
        'Configuring the grass blades to cast shadows and receive shadows.',
    ],
    tags: [Tag.ComputeShader, Tag.HLSL, Tag.BuiltInRP, Tag.Cg, Tag.Unity],
    technology: Technology.UnityEngine,
    category: Category.ComputeShaders,
})

export default data
