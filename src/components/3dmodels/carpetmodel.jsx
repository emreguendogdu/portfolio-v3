import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { Camera, WebGLRenderer } from "three"
import * as THREE from "three"
import { RGBELoader } from "three/addons/loaders/RGBELoader.js"

// const material = new THREE.MeshPhysicalMaterial({
//   color: params.color,
//   metalness: params.metalness,
//   roughness: 0,
//   thickness: 0.2,
//   ior: 1.35,
//   transmission: 1,
//   opacity: params.opacity,
//   chromaticAberration: 0.5,
//   transparent: true,
//   backside: true,
// })

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
        // material={material}
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
