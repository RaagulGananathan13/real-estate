import { Canvas } from '@react-three/fiber'
import { Float, Environment, ContactShadows } from '@react-three/drei'

function HouseModel() {
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      {/* Plot base */}
      <mesh receiveShadow position={[0, -1, 0]}>
        <boxGeometry args={[3, 0.2, 3]} />
        <meshStandardMaterial
          color="#0f766e"
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>

      {/* House body */}
      <mesh castShadow position={[0, -0.3, 0]}>
        <boxGeometry args={[1.6, 1, 1.6]} />
        <meshStandardMaterial
          color="#f1f5f9"
          metalness={0.6}
          roughness={0.15}
        />
      </mesh>

      {/* Roof */}
      <mesh castShadow position={[0, 0.5, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[1.6, 1, 4]} />
        <meshStandardMaterial
          color="#ef4444"
          metalness={0.5}
          roughness={0.25}
        />
      </mesh>

      {/* Door */}
      <mesh castShadow position={[0, -0.55, 0.85]}>
        <boxGeometry args={[0.4, 0.6, 0.05]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.2}
          roughness={0.6}
        />
      </mesh>

      {/* Windows */}
      <mesh castShadow position={[0.6, -0.2, 0.8]}>
        <boxGeometry args={[0.3, 0.3, 0.05]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.6}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
      <mesh castShadow position={[-0.6, -0.2, 0.8]}>
        <boxGeometry args={[0.3, 0.3, 0.05]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.6}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

export default function ThreeBlob() {
  return (
    <Canvas camera={{ position: [3, 2, 6], fov: 45 }} shadows>
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[6, 6, 6]}
        intensity={1.2}
        castShadow
        color="#fef3c7"
      />
      <directionalLight
        position={[-6, 3, -6]}
        intensity={0.4}
        color="#38bdf8"
      />

      {/* 3D Model */}
      <HouseModel />

      {/* Environment & shadows */}
      <Environment preset="sunset" />
      <ContactShadows
        position={[0, -1.2, 0]}
        scale={10}
        blur={3}
        opacity={0.4}
      />
    </Canvas>
  )
}
