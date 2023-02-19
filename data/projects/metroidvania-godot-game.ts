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
        'Player Movement, Jump, Air Jump, Wall Slide and Gravity implemented with Kinematic Rigid Body 2D.',
        'Player Sprite Animations using Animation Players and Camera Fllow Behaviour using Remote Transform.',
        'Tilemaps to build the terrain parts of the World.',
        'VFX implementation using Particle System.',
        'Player Gun and Bullets using instancing of Packed Scenes.',
        'Script inheritance to implement different types of Enemies.',
        'Hitboxes and Hurtboxes system to implement damage to Enemies and Player.',
        'Using Singletons and Resources to handle the Player Stats.',
        'Event Bus for pub/sub on system wide events.',
        'UI using Canvas Elements.',
        'Doors to implement changing Levels.',
        'Boss Enemy implementation using rigging, bones, IK and animations.',
        'Save Stations and Save/Load System rebuilding the scene with persisted nodes.',
        'Pooled SFX System and Music.',
        'Game Over screen and reset of the game to play again.',
    ],
    tags: [Tag.Godot, Tag.GDScript, Tag.Prototype],
    technology: Technology.GodotEngine,
    category: Category.GameDev,
})

export default data
