import { ProjectData } from '../src/models/ProjectData'

import cgBallOfLavaShaderUnity from './projects/cg-ball-of-lava-shader-unity'
import cgClippingShader from './projects/cg-clipping-shader'
import cgPerlinNoiseShaderUnity from './projects/cg-perlin-noise-shader-unity'
import cgShapingShadersUnity from './projects/cg-shaping-shaders-unity'
import cgStencilBufferUnity from './projects/cg-stencil-buffer-unity'
import cgSurfaceShadersUnity from './projects/cg-surface-shaders-unity'
import cgTextureShadersUnity from './projects/cg-texture-shaders-unity'
import cgTransparencyShadersUnity from './projects/cg-transparency-shaders-unity'
import fireVfxUnity from './projects/fire-vfx-unity'
import groundSlashVfxUnity from './projects/ground-slash-vfx-unity'
import iceAttackVfxUnity from './projects/ice-attack-vfx-unity'
import starcat from './projects/starcat'
import tessellationUnity from './projects/tessellation-unity'
import waterShaderUnity from './projects/water-shader-unity'

const pinned: ProjectData[] = [
    cgBallOfLavaShaderUnity,
    cgClippingShader,
    cgTransparencyShadersUnity,
    groundSlashVfxUnity,
    iceAttackVfxUnity,
    fireVfxUnity,
    waterShaderUnity,
]
const publishedGames: ProjectData[] = [starcat]
const other: ProjectData[] = [
    cgSurfaceShadersUnity,
    cgPerlinNoiseShaderUnity,
    cgTextureShadersUnity,
    cgShapingShadersUnity,
    cgStencilBufferUnity,
    tessellationUnity,
]

const projects = [...pinned, ...publishedGames, ...other]

export default projects
