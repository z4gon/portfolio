import { ProjectData } from '../../src/models/ProjectData'

const id = 'cg-shaping-shaders-unity'
const imagesFolder = `/images/portfolio/${id}`

const pictures: string[] = [
    'thumbnail',
    '19',
    '17',
    '16b',
    '15',
    '14',
    '13',
    '12',
    '11b',
    '10',
    '9',
    '8c',
    '7',
    '6b',
    '4',
]

const data: ProjectData = {
    id,
    date: '2022-10',
    thumbnailUrl: `${imagesFolder}/thumbnail.gif`,
    metaImageUrl: `${imagesFolder}/thumbnail.gif`,
    imagesUrls: pictures.map((name) => `${imagesFolder}/${name}.gif`),
    youtubeVideoIds: ['PWh5ksoYrLM'],
    title: 'Cg Shaping Shaders',
    subtitle: 'Written in Cg with ShaderLab, for the Built-in RP in Unity',
    description: [
        'A collection of Shaping Shaders written in Cg for the Built-in RP in Unity, from basic to advanced.',
    ],
    implementationDetails: [
        'Creating simple Unlit Shaders in the Built-in RP in Unity.',
        'Using the uniform _Time to define sinusoidal functions.',
        'ShaderLab to link the Cg program with the Unity Editor, to expose properties to use in the Shader.',
        'Defining the Vertex Shader and Fragment Shader functions.',
        'Working with interpolated custom data coming from the Vertex Shader Stage.',
        'Working with UVs and Object Position coordinates.',
        'Using Step, Smoothstep, Saturate and Clamp, from the stdlib in Cg.',
        'Implementing shaping functions to test if a pixel belongs to a circle, rectangle or polygon.',
        'Matrices for Rotation and Scaling, multiplication of matrices and vectors for transfromation of coordinates.',
        'Tracking of the Mouse pointer, then feeding it into the Material, for later use in the Cg progam code in the Shader.',
        'Tiling of the UVs coordinates.',
        'Drawing lines using equations such as y = x, y = sin(x).',
        'Implementing a SONAR hud with shaping functions, using the vector dot scalar multiplication to calculate the magnitude of the projection of a vector onto a second vector.',
        'SONAR gradient using atan2 and angles substraction to measuer the angle in radians from the SONAR line.',
        'Using Cg semantics for compatiblity with different GPU hardware.',
    ],
    tags: ['Cg', 'ShaderLab', 'Vertex Shader', 'Fragment Shader', 'Untity3D'],
    gitHubUrl: `https://github.com/z4gon/${id}`,
}

export default data
