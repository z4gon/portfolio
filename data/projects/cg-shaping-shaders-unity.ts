import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'
import { Tag } from '../tags'

const data: ProjectData = generateProjectData({
    id: 'cg-shaping-shaders-unity',
    date: '2022-10',
    thumbnailImageName: 'thumbnail.gif',
    imagesNames: [
        'thumbnail.gif',
        '19.gif',
        '17.gif',
        '16b.gif',
        '15.gif',
        '14.gif',
        '13.gif',
        '12.gif',
        '11b.gif',
        '10.gif',
        '9.gif',
        '8c.gif',
        '7.gif',
        '6b.gif',
        '4.gif',
    ],
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
        'Matrices for Rotation and Scaling, multiplication of matrices and vectors for transformation of coordinates.',
        'Tracking of the Mouse pointer, then feeding it into the Material, for later use in the Cg program code in the Shader.',
        'Tiling of the UVs coordinates.',
        'Drawing lines using equations such as y = x, y = sin(x).',
        'Implementing a SONAR hud with shaping functions, using the vector dot scalar multiplication to calculate the magnitude of the projection of a vector onto a second vector.',
        'SONAR gradient using atan2 and angles subtraction to measure the angle in radians from the SONAR line.',
        'Using Cg semantics for compatibility with different GPU hardware.',
    ],
    tags: [
        Tag.Cg,
        Tag.ShaderLab,
        Tag.VertexShader,
        Tag.FragmentShader,
        Tag.Unity3D,
    ],
})

export default data
