import { ProjectData } from '../../src/models/ProjectData'

const id = 'cg-perlin-noise-shader-unity'
const imagesFolder = `/images/portfolio/${id}`

const pictures: string[] = ['thumbnail', '3', '2', '1']

const data: ProjectData = {
    id,
    date: '2022-10',
    thumbnailUrl: `${imagesFolder}/thumbnail.gif`,
    metaImageUrl: `${imagesFolder}/thumbnail.gif`,
    imagesUrls: pictures.map((name) => `${imagesFolder}/${name}.gif`),
    youtubeVideoIds: ['d1HJ0O3btq0'],
    title: 'Perlin Noise Shader',
    subtitle: 'Written in Cg with ShaderLab, for the Built-in RP in Unity',
    description: ['The Perlin Noise Algorithm.'],
    implementationDetails: [
        'Slice the surface in a grid of rectangles, given the amount of columns and rows.',
        'Assign a pseudo-random gradient vector of magnitude 1, to each cross point in the grid. These will act as influence vectors for the pixels inside the square.',
        'Use a permutations array to generate pseudo-random constant gradients.',
        'Calculate the distance for every pixel, to each corner of the containing square.',
        'Do the dot scalar multiplication between the distance vector and the corresponding gradient vector.',
        'Interpolate the 4 dot values for the current pixel.',
        'Optionally use _Time to rotate the gradient vectors over time.',
    ],
    tags: ['Cg', 'ShaderLab', 'Vertex Shader', 'Fragment Shader', 'Unity3D'],
    gitHubUrl: `https://github.com/z4gon/${id}`,
}

export default data
