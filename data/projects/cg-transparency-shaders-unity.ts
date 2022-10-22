import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'cg-transparency-shaders-unity',
    date: '2022-10',
    thumbnailImageName: 'thumbnail.gif',
    imagesNames: [
        'thumbnail.gif',
        '10.gif',
        '8.gif',
        '7.gif',
        '6.gif',
        '5.gif',
        '4.gif',
        '3.gif',
        '2.gif',
        '1.gif',
    ],
    title: 'Transparent Shaders',
    subtitle: 'Transparency shaders written in Cg for the Built-in RP in Unity',
    implementationDetails: [
        'Standard Surface Shader using alpha:blend to control the transparency.',
        'Setting RenderType and Queue to Transparent, and disabling ZWrite.',
        'Writing a second Pass for the Surface Shader with alphatest and addshadow, to create shadows that match the transparency.',
        'Writing refractions and reflections from scratch in an Unlit shader.',
        'Using GrabPass to get a texture with the current pixels in the Frame Buffer.',
        'Using ComputeGrabScreenPos, tex2Dproj and UNITY_PROJ_COORD to get the pixel from the GrabPass texture.',
        'Distorting the GrabPass pixel with the Normal Map, to generate refraction.',
        'Using the SkyBox/CubeMap texture to create environmental reflections.',
        'Using WorldSpaceViewDir to obtain the direction of the camera to the pixel.',
        'Using the built in Cg function reflect(), to get the reflection vector along the normal vector in world space (From UnityObjectToWorldNormal).',
        'Finally getting the reflection color by sampling the cube texture with texCUBE and the reflection vector.',
    ],
    tags: [
        Tag.Cg,
        Tag.BuiltInRP,
        Tag.ShaderLab,
        Tag.Unity,
        Tag.SurfaceShader,
        Tag.VertexShader,
        Tag.FragmentShader,
    ],
    technology: Technology.UnityEngine,
    cardConfig: {
        backgroundSize: '100%',
        backgroundPosition: '3px -6px',
        gradientColor: 'rgb(0, 66, 126)',
    },
})

export default data
