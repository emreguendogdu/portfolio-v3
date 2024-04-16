import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { Camera, WebGLRenderer } from "three"
import * as THREE from "three"
import { RGBELoader } from "three/addons/loaders/RGBELoader.js"

const hdrEquirect = new RGBELoader()
  .setPath("textures/equirectangular/")
  .load("royal_esplanade_1k.hdr", function () {
    hdrEquirect.mapping = THREE.EquirectangularReflectionMapping

    init()
    render()
  })

const hardMaterialProps = {
  thickness: 2,
  roughness: 0,
  transmission: 1,
  ior: 1.35,
  chromaticAberration: 0.02,
  backside: true,
}

const params = {
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

function generateTexture() {
  const canvas = document.createElement("canvas")
  canvas.width = 2
  canvas.height = 2

  const context = canvas.getContext("2d")
  context.fillStyle = "white"
  context.fillRect(0, 1, 2, 1)

  return canvas
}

const texture = new THREE.CanvasTexture(generateTexture())
texture.magFilter = THREE.NearestFilter
texture.wrapT = THREE.RepeatWrapping
texture.wrapS = THREE.RepeatWrapping
texture.repeat.set(1, 3.5)

// const material = new THREE.MeshPhysicalMaterial({
// color: params.color,
// metalness: params.metalness,
//   roughness: params.roughness,
//   ior: params.ior,
//   alphaMap: texture,
//   envMap: hdrEquirect,
//   envMapIntensity: params.envMapIntensity,
//   transmission: 1, // use material.transmission for glass materials
//   specularIntensity: params.specularIntensity,
//   specularColor: params.specularColor,
//   opacity: params.opacity,
//   side: THREE.DoubleSide,
//   transparent: true,
// })

const material = new THREE.MeshPhysicalMaterial({
  color: params.color,
  metalness: params.metalness,
  roughness: 0,
  thickness: 0.2,
  ior: 1.35,
  transmission: 1,
  opacity: params.opacity,
  chromaticAberration: 0.5,
  transparent: true,
  backside: true,
})

export default function CarpetModel() {
  const mesh = useRef()
  const { nodes, materials } = useGLTF("carpetInGlass.glb")
  const { viewport } = useThree()

  useFrame(() => {
    mesh.current.rotation.x += 0.004
    mesh.current.rotation.z += 0.002
  })
  return (
    <group dispose={null} ref={mesh} scale={1.618}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass.geometry}
        material={material}
        position={[0.06, 0, 0.06]}
        scale={[1.5, 0.1618, 0.65]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials["carpet.001"]}
      >
        {/* <MeshTransmissionMaterial {...hardMaterialProps} /> */}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials["carpet hair.001"]}
      ></mesh>
      <directionalLight position={[0, 10, 0]} intensity={1} castShadow />
    </group>
  )
}
