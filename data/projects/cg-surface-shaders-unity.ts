import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'cg-surface-shaders-unity',
    date: '2022-10',
    imagesNames: [
        '9.gif',
        '8a.gif',
        '8b.gif',
        '5.gif',
        '4.gif',
        '3.gif',
        '7.gif',
        '6.gif',
        '2.gif',
        '1.gif',
        '10.gif',
        '11.png',
    ],
    youtubeVideoIds: ['QF2svyMgkRQ'],
    title: 'Standard Surface Shaders',
    subtitle: 'Written in the Cg programming language for Unity Built-In RP',
    implementationDetails: [
        'Lambert Lighting, Blinn-Phong Lighting and Custom Lighting models.',
        'Standard Surface Shaders in Unity using the #pragma directive to define the surface function and the lighting model.',
        'Setting the Albedo property from a texture.',
        'Normals implemented using a Normal Map or "Bump Map".',
        'Fresnel shader implemented doing the dot scalar multiplication between the Normal and the IN.viewDir.',
        'Environment Mapping using a SkyBox or Cube Map, then using the Unity provided worldRefl vector to derive the texel using texCUBE.',
        'Combine Normal Maps and Environment Mapping, using the Unity provided INTERNAL_DATA macro and the WorldReflectionVector()',
        'Using the Binn-Phong lighting model in a Standard Surface Shader.',
        'Implementing a Custom Lambert Lighting model.',
        'Toon Shading implemented with a ramped Lambert lighting model and an Outline shader implemented in a second Pass.',
        'Utilizing the Standard, physically correct lighting model.',
        'Writing a custom unlit shader for manual implementation of Lambert Lighting, Ambient Illumination and Shadow Casting/Receiving.',
    ],
    tags: [
        Tag.Cg,
        Tag.BuiltInRP,
        Tag.ShaderLab,
        Tag.Unity,
        Tag.SurfaceShader,
        Tag.Lighting,
    ],
    technology: Technology.UnityEngine,
    cardConfig: {
        backgroundSize: '120%',
        backgroundPosition: '10px 0px',
        gradientColor: 'rgb(0, 77, 159)',
    },
})

export default data
