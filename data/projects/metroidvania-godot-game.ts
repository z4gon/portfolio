import { Category } from '../../src/models/enums/Category'
import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: 'metroidvania-godot-game',
    date: '2023-2',
    imagesNames: [
        '0.jpg',
        '5.jpg',
        '4.jpg',
        '3.jpg',
        '2.jpg',
        '1.jpg',
    ],
    videosNames: [
        '1.mp4',
        '2.mp4',
    ],
    youtubeVideoIds: ['P3s1gVc3-zM'],
    title: 'Metroidvania Godot Game',
    subtitle: 'Made with Godot Engine 3.5.1',
    description: [
        'Prototype to learn the basics of the Godot Engine, Scene Graph, Resources, Packed Scenes, Animations, Nodes and GDScript.',
    ],
    implementationDetails: [
        'Waves achieved with geometry displacement, adding Normals multiplied by a gradient noise, effectively deforming the fragment geometry.',
    ],
    tags: [Tag.Godot, Tag.GDScript, Tag.Prototype],
    technology: Technology.GodotEngine,
    category: Category.GameDev,
})

export default data
