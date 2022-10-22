import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'cg-ball-of-lava-shader-unity',
    aliases: ['ball-of-lava-shader-unity'],
    date: '2022-10',
    thumbnailImageName: 'thumbnail.gif',
    imagesNames: [
        '7.gif',
        '6.gif',
        '5.gif',
        '4.gif',
        '3.gif',
        '2.gif',
        '1.gif',
    ],
    youtubeVideoIds: ['r5qDHvfYG9c'],
    title: 'Ball of Lava Shader',
    subtitle: 'Written in Cg with ShaderLab, for the Built-in RP in Unity',
    implementationDetails: [
        'Using the Perlin Noise algorithm to displace vertices in the mesh, during the Vertex Shader Stage.',
        'Using _Time to animate the Perlin Noise, also multiplying by _Displacement and _NoiseVelocity to control how much and how fast the noise is.',
        'Displacing the uv coordinates to simulate rotation, multiplying by _RotationVelocity to control the speed.',
        "Generating a Mesh and making sure the UV map wraps correctly, so the Perlin noise doesn't generate weird shapes in the mesh.",
        'Lerping between colors using steps.',
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
    cardConfig: {
        backgroundSize: '120%',
        backgroundPosition: '13px 3px',
        gradientColor: 'rgb(109, 23, 0)',
    },
})

export default data
