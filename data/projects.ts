import { ProjectData } from '../src/models/ProjectData'

import _3dAnimatedCharacterUnity from './projects/3d-animated-character-unity'
import bubblesComputeShaderUnity from './projects/bubbles-compute-shader-unity'
import cgBallOfLavaShaderUnity from './projects/cg-ball-of-lava-shader-unity'
import cgClippingShader from './projects/cg-clipping-shader'
import cgPerlinNoiseShaderUnity from './projects/cg-perlin-noise-shader-unity'
import cgShapingShadersUnity from './projects/cg-shaping-shaders-unity'
import cgStencilBufferUnity from './projects/cg-stencil-buffer-unity'
import cgSurfaceShadersUnity from './projects/cg-surface-shaders-unity'
import cgTextureShadersUnity from './projects/cg-texture-shaders-unity'
import cgTransparencyShadersUnity from './projects/cg-transparency-shaders-unity'
import fireVfxUnity from './projects/fire-vfx-unity'
import grassComputeShaderUnity from './projects/grass-compute-shader-unity'
import groundSlashVfxUnity from './projects/ground-slash-vfx-unity'
import iceAttackVfxUnity from './projects/ice-attack-vfx-unity'
import marioKartItemBoxVfx from './projects/mario-kart-item-box-vfx'
import meshDeformationComputeShaderUnity from './projects/mesh-deformation-compute-shader-unity'
import starcat from './projects/starcat'
import tessellationUnity from './projects/tessellation-unity'
import waterShaderUnity from './projects/water-shader-unity'

const pinned: ProjectData[] = [
    marioKartItemBoxVfx,
    cgBallOfLavaShaderUnity,
    _3dAnimatedCharacterUnity,
    grassComputeShaderUnity,
    groundSlashVfxUnity,
    iceAttackVfxUnity,
    fireVfxUnity,
    waterShaderUnity,
]
const publishedGames: ProjectData[] = [starcat]
const other: ProjectData[] = [
    cgClippingShader,
    cgTransparencyShadersUnity,
    meshDeformationComputeShaderUnity,
    cgSurfaceShadersUnity,
    bubblesComputeShaderUnity,
    cgPerlinNoiseShaderUnity,
    cgTextureShadersUnity,
    cgShapingShadersUnity,
    cgStencilBufferUnity,
    tessellationUnity,
]

const projects = [...pinned, ...publishedGames, ...other]

export default projects
