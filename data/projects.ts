import { ProjectData } from '../src/models/ProjectData'

import fireVfxUnity from './projects/fire-vfx-unity'
import groundSlashVfxUnity from './projects/ground-slash-vfx-unity'
import iceAttackVfxUnity from './projects/ice-attack-vfx-unity'
import starcat from './projects/starcat'
import waterShaderUnity from './projects/water-shader-unity'

const pinned: ProjectData[] = [
    groundSlashVfxUnity,
    iceAttackVfxUnity,
    fireVfxUnity,
    waterShaderUnity,
]
const publishedGames: ProjectData[] = [starcat]
const other: ProjectData[] = []

const projects = [...pinned, ...publishedGames, ...other]

export default projects
