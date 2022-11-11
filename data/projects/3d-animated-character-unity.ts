import { Tag } from '../../src/models/enums/Tag'
import { Technology } from '../../src/models/enums/Technology'
import { ProjectData } from '../../src/models/ProjectData'
import generateProjectData from '../generateProjectData'

const data: ProjectData = generateProjectData({
    id: '3d-animated-character-unity',
    date: '2022-11',
    imagesNames: [
        '34.jpg',
        '33.jpg',
        '32.jpg',
        '31.jpg',
        '30.jpg',
        '26.jpg',
        '24.jpg',
        '23.jpg',
        '20.jpg',
        '16.jpg',
        '15.jpg',
        '14.jpg',
        '10.jpg',
        '9.jpg',
        '6.jpg',
        '4.jpg',
        '3.jpg',
        '1.jpg',
    ],
    youtubeVideoIds: ['Salca9mhmU8'],
    title: '3D Animated Character',
    subtitle: 'Modelled and Animated in Blender, implemented in Unity',
    implementationDetails: [
        'Designing the concept in Affinity Photo, to use as reference when modelling.',
        '3D Modelling the character in Blender.',
        'Creating a high poly version and a low poly version of the model.',
        'Ensuring the low poly version is optimized and works well when rigged and animated.',
        'UV Mapping the low poly version.',
        'Baking the Normals of the high poly version in a Normal Map, to use in the low poly version.',
        'Texturing the model using the Paint tool in Blender.',
        'Rigging the model with an Armature of Bones for Animation.',
        'Inverse Kinematics for the extremities.',
        'Weight painting and vertex groups checking.',
        'Implementing animations for Idle, Walking, Running and Fighting.',
        'Importing the animations in Unity.',
        'Adding animation events for when punches land.',
        'Integrating assets from the Asset Store for setting up the demo scene.',
        'Integrating the Third Person Character Controller Asset from the asset store.',
        'Working with the new Input System, extending it, using Unity Messages.',
        'Extending the Animator Controller to add the new states for the fight animations.',
        'Adding camera shake to the Cinemachine Camera.',
    ],
    tags: [Tag.Blender, Tag._3DModelling, Tag.Animation, Tag.Unity],
    technology: Technology.UnityEngine,
})

export default data
