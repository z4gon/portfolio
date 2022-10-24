import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'cg-perlin-noise-shader-unity',
    date: '2022-10',
    videosNames: ['4.mp4', '3.mp4', '2.mp4', '1.mp4'],
    youtubeVideoIds: ['d1HJ0O3btq0'],
    title: 'Perlin Noise Shader',
    subtitle: 'Written in Cg with ShaderLab, for the Built-in RP in Unity',
    implementationDetails: [
        'Implement the Perlin Noise Algorithm',
        'Slice the surface in a grid of rectangles, given the amount of columns and rows.',
        'Assign a pseudo-random gradient vector of magnitude 1, to each cross point in the grid. These will act as influence vectors for the pixels inside the square.',
        'Use a permutations array to generate pseudo-random constant gradients.',
        'Calculate the distance for every pixel, to each corner of the containing square.',
        'Do the dot scalar multiplication between the distance vector and the corresponding gradient vector.',
        'Interpolate the 4 dot values for the current pixel.',
        'Optionally use _Time to rotate the gradient vectors over time.',
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
})

export default data
