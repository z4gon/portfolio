import _3dAnimatedCharacterUnity from './projects/3d-animated-character-unity'
import blackHoleVfxUnity from './projects/black-hole-vfx-unity'
import bubblesComputeShaderUnity from './projects/bubbles-compute-shader-unity'
import cgBallOfLavaShaderUnity from './projects/cg-ball-of-lava-shader-unity'
import cgClippingShader from './projects/cg-clipping-shader'
import cgPerlinNoiseShaderUnity from './projects/cg-perlin-noise-shader-unity'
import cgShapingShadersUnity from './projects/cg-shaping-shaders-unity'
import cgStencilBufferUnity from './projects/cg-stencil-buffer-unity'
import cgSurfaceShadersUnity from './projects/cg-surface-shaders-unity'
import cgTextureShadersUnity from './projects/cg-texture-shaders-unity'
import cgTransparencyShadersUnity from './projects/cg-transparency-shaders-unity'
import characterSkinTransitionShaderUnity from './projects/character-skin-transition-shader-unity'
import fireVfxUnity from './projects/fire-vfx-unity'
import grassComputeShaderUnity from './projects/grass-compute-shader-unity'
import groundSlashVfxUnity from './projects/ground-slash-vfx-unity'
import iceAttackVfxUnity from './projects/ice-attack-vfx-unity'
import marioKartItemBoxVfx from './projects/mario-kart-item-box-vfx'
import meshDeformationComputeShaderUnity from './projects/mesh-deformation-compute-shader-unity'
import sciFiShieldShaderUnity from './projects/sci-fi-shield-shader-unity'
import snowyRockTriplanarShaderUnity from './projects/snowy-rock-triplanar-shader-unreal'
import spacePortalShaderUnity from './projects/space-portal-shader-unity'
import starcat from './projects/starcat'
import tessellationUnity from './projects/tessellation-unity'
import uiStarsFireworksVfxUnity from './projects/ui-stars-fireworks-vfx-unity'
import waterShaderUnity from './projects/water-shader-unity'

const vfx = [
    blackHoleVfxUnity,
    groundSlashVfxUnity,
    iceAttackVfxUnity,
    uiStarsFireworksVfxUnity,
    fireVfxUnity,
]
const shaders = [
    sciFiShieldShaderUnity,
    marioKartItemBoxVfx,
    characterSkinTransitionShaderUnity,
    snowyRockTriplanarShaderUnity,
    waterShaderUnity,
    spacePortalShaderUnity,
    cgBallOfLavaShaderUnity,
    cgClippingShader,
    cgTransparencyShadersUnity,
    cgSurfaceShadersUnity,
    cgPerlinNoiseShaderUnity,
    cgTextureShadersUnity,
    cgShapingShadersUnity,
    cgStencilBufferUnity,
    tessellationUnity,
]
const computeShaders = [
    grassComputeShaderUnity,
    meshDeformationComputeShaderUnity,
    bubblesComputeShaderUnity,
]
const modelingAndAnimation = [_3dAnimatedCharacterUnity]
const publishedGames = [starcat]

const projects = [
    ...vfx,
    ...shaders,
    ...computeShaders,
    ...modelingAndAnimation,
    ...publishedGames,
]

export default projects
