import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { Camera, WebGLRenderer } from "three"
import * as THREE from "three"
import { DRACOLoader, GLTFLoader } from "three/examples/jsm/Addons.js"

function isCloseEnough(a, b, tolerance = 0.0001) {
  return Math.abs(a - b) <= tolerance
}

export default function AureliusModel() {
  const mesh = useRef()
  const { nodes, materials } = useGLTF(
    "aurelius3.glb",
    "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
  )
  const { viewport } = useThree()

  useFrame(() => {
    mesh.current.rotation.x += 0.004
    mesh.current.rotation.z += 0.004
    // console.log(mesh.curren3t.rotation)
  })
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
