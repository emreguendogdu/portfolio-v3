export const GLASS_MATERIAL_PROPS = {
  thickness: 2,
  roughness: 0,
  transmission: 1,
  ior: 1.35,
  chromaticAberration: 0.02,
  backside: true,
}

export const GLASS_PARAMS = {
  color: 0xffffff,
  transmission: 1,
  opacity: 1,
  metalness: 0,
  roughness: 0,
  ior: 1.35,
  thickness: 0.01,
  specularIntensity: 1,
  specularColor: 0xffffff,
  envMapIntensity: 1,
  lightIntensity: 1,
  exposure: 1,
}

export const GLASS_PARAMS_2 = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0,
  roughness: 0,
  thickness: 0.2,
  ior: 1.35,
  transmission: 1,
  opacity: 1,
  chromaticAberration: 0.5,
  transparent: true,
  backside: true,
})
