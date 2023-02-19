import { Category } from '../../src/models/enums/Category'
import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'

const data = {
    id: 'metal-render-pipeline',
    date: '2022-12',
    videosNames: [
        '7.mp4',
        '6.mp4',
        '5.mp4',
        '4.mp4',
        '3.mp4',
        '2.mp4',
        '1.mp4',
    ],
    imagesNames: [
        '8.jpg',
        '7.jpg',
        '6.jpg',
        '5.jpg',
        '4.jpg',
        '3.jpg',
        '2.jpg',
        '1.jpg',
    ],
    youtubeVideoIds: ['lGVy9tTWq2E'],
    title: 'Metal 3D Render Pipeline',
    subtitle: 'Basic Game Engine using the Metal Graphics API',
    implementationDetails: [
        'Part 1: Setting up the basic Render Pipeline',
        'Part 2: Draw a simple Triangle in the Screen',
        'Part 3: Vertex and Fragment Shaders',
        'Part 4: Vertex Descriptors',
        'Part 5: Game Object, Libraries and Renderer',
        'Part 6: Transform, Components, MeshRenderer',
        'Part 7: 3D Affine Transformation Matrices',
        'Part 8: Scenes',
        'Part 9: Index Buffers',
        'Part 10: Camera and View Matrix',
        'Part 11: 3D Perspective Projection Matrix',
        'Part 12: Nested Model Matrices',
        'Part 13: Materials, Multiple Render Pipeline Descriptors and States',
        'Part 14: UVs, Loading and Sampling Textures',
        'Part 15: Loading and Rendering .OBJ Models',
        'Part 16: Lighting, Ambient, Diffuse and Specular',
    ],
    tags: [
        Tag.GraphicsApi,
        Tag.Lighting,
        Tag.Rendering,
        Tag.GameEngine,
        Tag.RenderPipeline,
        Tag.VertexShader,
        Tag.FragmentShader,
    ],
    technology: Technology.Metal,
    category: Category.GameDev,
}

export default data
