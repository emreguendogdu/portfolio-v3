import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { Camera, WebGLRenderer } from "three"
import * as THREE from "three"

const material = new THREE.MeshPhysicalMaterial({
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

export default function AureliusModel() {
  const mesh = useRef()
  const { nodes, materials } = useGLTF("aurelius1.glb")
  const { viewport } = useThree()

  useFrame(() => {
    mesh.current.rotation.x += 0.004
    mesh.current.rotation.z += 0.0006
  })
  console.log(nodes)
  return (
    <group dispose={null} ref={mesh} scale={0.6}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model.geometry}
        // material={material}
        material={materials.model}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
      />
      {/* <MeshTransmissionMaterial {...hardMaterialProps} /> */}
    </group>
  )
}
