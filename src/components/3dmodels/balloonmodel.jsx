import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"

const hardMaterialProps = {
  thickness: 2,
  roughness: 0,
  transmission: 1,
  ior: 1.2,
  chromaticAberration: 0.02,
  backside: true,
}

export default function BalloonModel() {
  const mesh = useRef()
  const { nodes } = useGLTF("balloon.glb")
  console.log(nodes)
  const { viewport } = useThree()

  useFrame(() => {})
  return (
    // <group scale={viewport.width / 14}>
    <group scale={0.5}>
      <Text
        fontSize={1.4}
        // font="fonts/Programme-Regular.ttf"
        position={[0, 0, -0.5]}
      >
        hello world!
      </Text>
      <mesh ref={mesh} {...nodes.Sphere}>
        <MeshTransmissionMaterial {...hardMaterialProps} />
      </mesh>
    </group>
  )
}
