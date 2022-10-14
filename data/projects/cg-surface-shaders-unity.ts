import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'
import { Tag } from '../tags'

const data: ProjectData = generateProjectData({
    id: 'cg-surface-shaders-unity',
    date: '2022-10',
    thumbnailImageName: 'thumbnail.gif',
    imagesNames: [
        '8a.gif',
        '8b.gif',
        '5.gif',
        '4.gif',
        '3.gif',
        '7.gif',
        '6.gif',
        '2.gif',
        '1.gif',
    ],
    youtubeVideoIds: ['QF2svyMgkRQ'],
    title: 'Standard Surface Shaders',
    subtitle: 'Written in Cg with ShaderLab, for the Built-in RP in Unity',
    description: [
        'Lambert Lighting, Blinn-Phong Lighting and Custom Lighting models.',
    ],
    implementationDetails: [
        'Standard Surface Shaders in Unity using the #pragma directive to define the surface function and the lighting model.',
        'Setting the Albedo property from a texture.',
        'Normals implemented using a Normal Map or "Bump Map".',
        'Fresnel shader implemented doing the dot scalar multiplication between the Normal and the IN.viewDir.',
        'Environment Mapping using a SkyBox or Cube Map, then using the Unity provided worldRefl vector to derive the texel using texCUBE.',
        'Combine Normal Maps and Environment Mapping, using the Unity provided INTERNAL_DATA macro and the WorldReflectionVector()',
        'Using the Binn-Phong lighting model in a Standard Surface Shader.',
        'Implementing a Custom Lambert Lighting model.',
        'Toon Shading implemented with a ramped Lambert lighting model and an Outline shader implemented in a second Pass.',
    ],
    tags: [Tag.Cg, Tag.ShaderLab, Tag.SurfaceShader, Tag.Lighting, Tag.Unity3D],
})

export default data
