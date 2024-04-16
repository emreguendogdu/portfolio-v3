"use client"
import React from "react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import BalloonModel from "./balloonmodel"
import CarpetModel from "./carpetmodel"
import AureliusModel from "./aureliusmodel"

export default function Scene() {
  return (
    <Canvas style={{ backgroundColor: "black" }}>
      <Environment preset="lobby" />
      <spotLight position={[0, 0, 6]} intensity={2} />
      {/* <CarpetModel /> */}
      <AureliusModel />
    </Canvas>
  )
}
