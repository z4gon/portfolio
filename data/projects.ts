import { ProjectData } from '../src/models/ProjectData'

import cgPerlinNoiseShaderUnity from './projects/cg-perlin-noise-shader-unity'
import cgShapingShadersUnity from './projects/cg-shaping-shaders-unity'
import fireVfxUnity from './projects/fire-vfx-unity'
import groundSlashVfxUnity from './projects/ground-slash-vfx-unity'
import iceAttackVfxUnity from './projects/ice-attack-vfx-unity'
import starcat from './projects/starcat'
import waterShaderUnity from './projects/water-shader-unity'

const pinned: ProjectData[] = [
    cgPerlinNoiseShaderUnity,
    cgShapingShadersUnity,
    groundSlashVfxUnity,
    iceAttackVfxUnity,
    fireVfxUnity,
    waterShaderUnity,
]
const publishedGames: ProjectData[] = [starcat]
const other: ProjectData[] = []

const projects = [...pinned, ...publishedGames, ...other]

export default projects
