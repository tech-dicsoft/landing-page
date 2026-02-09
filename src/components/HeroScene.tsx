import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

const DIC_CYAN = 0x0d9bbf;
const DIC_BLUE = 0x1e5f8a;

function WireframeShape(): React.ReactElement {
  const meshRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
      <meshBasicMaterial color={DIC_CYAN} wireframe />
    </mesh>
  );
}

function WireframeRing(): React.ReactElement {
  const meshRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.z += delta * -0.12;
    }
  });
  return (
    <mesh ref={meshRef} position={[2, 0.5, -2]}>
      <torusGeometry args={[1.5, 0.08, 16, 48]} />
      <meshBasicMaterial color={DIC_BLUE} wireframe />
    </mesh>
  );
}

function SecondRing(): React.ReactElement {
  const meshRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.18;
      meshRef.current.rotation.z += delta * 0.08;
    }
  });
  return (
    <mesh ref={meshRef} position={[-1.8, -0.3, -1.5]}>
      <torusGeometry args={[1, 0.06, 12, 36]} />
      <meshBasicMaterial color={DIC_CYAN} wireframe />
    </mesh>
  );
}

export default function HeroScene(): React.ReactElement {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <WireframeShape />
      <WireframeRing />
      <SecondRing />
    </>
  );
}
