import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'mario-kart-item-box-vfx',
    date: '2022-10',
    videosNames: [
        '13.mp4',
        '12.mp4',
        '11.mp4',
        '10.mp4',
        '9.mp4',
        '8.mp4',
        '7.mp4',
        '6.mp4',
        '5.mp4',
        '4.mp4',
        '3.mp4',
        '2.mp4',
        '1.mp4',
    ],
    imagesNames: ['14.png', '15.png'],
    youtubeVideoIds: ['5UPacp2vzOk'],
    title: 'Mario Kart Item Box VFX',
    subtitle:
        'Implemented both with pure HLSL and Shader Graph, for the Universal RP in Unity',
    implementationDetails: [
        'Rainbow animation effect, using a grayscale texture to distort the UVs for sampling the rainbow colors.',
        'Utilizing the _Time built in variable to make the UVs offset with time.',
        'Using Culling to only render inner sides of the box.',
        'Transparency implemented using RenderType and Queue for transparency, ZWrite off for best practices, and Blend One One.',
        'Obtaining the view direction by substracting the world space position of the vertex to the _WorldSpaceCameraPos.',
        'Basic Fresnel effect achieved by doing the dot product between the view direction and the normal.',
        'Using built in functions and variables from Core.hlsl and Lighting.hlsl',
        'Obtaining the main light direction using the built in GetMainLight()',
        'Computing a basic Blinn Phong lighting model by reflecting the main light dir along the normal, then doing the dot product with the view dir.',
        'Using a Particle System to render the question mark inside the box.',
        'Using an Animation Controller to implement the animations.',
        'Drawing the textures in Affinity Photo for the box.',
    ],
    tags: [
        Tag.HLSL,
        Tag.URP,
        Tag.ShaderGraph,
        Tag.Unity,
        Tag.VertexShader,
        Tag.FragmentShader,
    ],
    technology: Technology.UnityEngine,
    cardConfig: {
        backgroundSize: '100%',
        backgroundPosition: '15px -5px',
        gradientColor: 'rgb(255, 85, 236)',
    },
})

export default data
