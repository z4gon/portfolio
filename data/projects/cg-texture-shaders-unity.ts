import { ProjectData } from '../../src/models/ProjectData'

const id = 'cg-texture-shaders-unity'
const imagesFolder = `/images/portfolio/${id}`

const pictures: string[] = ['3', '2', '1d', '1b']

const data: ProjectData = {
    id,
    date: '2022-10',
    thumbnailUrl: `${imagesFolder}/thumbnail.gif`,
    metaImageUrl: `${imagesFolder}/thumbnail.gif`,
    imagesUrls: pictures.map((name) => `${imagesFolder}/${name}.gif`),
    youtubeVideoIds: ['G0M9q3efZ1M'],
    title: 'Cg Texture Shaders',
    subtitle: 'Written in Cg with ShaderLab, for the Built-in RP in Unity',
    description: [
        'Texture manipulation Shaders written in the Cg programming language for Unity Built-In RP.',
    ],
    implementationDetails: [
        'Using the 2D Property type in ShaderLab and the sampler2D data type in Cg.',
        'Mapping the uv coordinates to a texel using the tex2D function.',
        'Flipping and rotating uv coordinates.',
        'Ripple effect calculated using a radial vector to the center of the quad.',
        'Transition and blending between textures using smoothstep.',
    ],
    tags: ['Cg', 'ShaderLab', 'Fragment Shader', 'Unity3D'],
    gitHubUrl: `https://github.com/z4gon/${id}`,
}

export default data
