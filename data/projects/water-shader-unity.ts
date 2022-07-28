import { ProjectData } from '../../src/models/ProjectData'

const data: ProjectData = {
    id: 'water-shader-unity',
    date: '2022-7',
    thumbnailUrl: '/images/portfolio/water-shader-unity/thumbnail.gif',
    metaImageUrl: '/images/portfolio/water-shader-unity/thumbnail.gif',
    imagesUrls: [
        '/images/portfolio/water-shader-unity/cliff.gif',
        '/images/portfolio/water-shader-unity/lake.gif',
        '/images/portfolio/water-shader-unity/water_waves.gif',
        '/images/portfolio/water-shader-unity/water_depth_colored.gif',
        '/images/portfolio/water-shader-unity/water_depth_refracted.gif',
        '/images/portfolio/water-shader-unity/water_refraction.gif',
        '/images/portfolio/water-shader-unity/water_foam.gif',
        '/images/portfolio/water-shader-unity/water_depth.gif',
        '/images/portfolio/water-shader-unity/water_colors.gif',
    ],
    youtubeVideoId: '6VaHBkttvSE',
    title: 'Water Shader',
    subtitle: 'With Shader Graph in Unity',
    description: [
        'Water shader with dynamic configurations, which can simulate several environmental effects.',
    ],
    bullets: [
        'Water depth effect using Scene Depth node (Camera Depth Buffer) and Screen Position node (Fragment Position)',
        'Refractions using Screen Color node to render distorted objects behind the water, using Normals generated from height from a gradient noise.',
        'Foam generated using the Scene Depth node and a gradient noise.',
        'Waves achieved with geometry displacement, adding Normals multiplied by a gradient noise, effectively deforming the fragment geometry.',
    ],
    tags: ['Unity3D', 'VFX', 'Shader Graph'],
    links: [
        {
            href: 'https://github.com/z4gon/water-shader-unity',
            text: 'View on GitHub',
        },
    ],
}

export default data
