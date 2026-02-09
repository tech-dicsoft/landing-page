import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Mesh, Points, LineSegments } from "three";

const DIC_CYAN = 0x0d9bbf;
const DIC_BLUE = 0x1e5f8a;
const WHITE = 0xffffff;

// Vị trí các "nút" xung quanh sphere trung tâm (giống icon trong reference)
const NODE_POSITIONS: [number, number, number][] = [
  [2.2, 1.4, -0.8],
  [-2.0, 1.2, -0.6],
  [1.8, -1.5, -0.5],
  [-2.2, -1.0, -0.7],
  [0.5, 2.2, -0.4],
  [-0.8, -2.0, -0.6],
  [2.5, 0, -1],
  [-2.3, 0.5, -0.9],
  [0, 2.5, -0.3],
  [1.2, -2.2, -0.5],
  [-1.5, 1.8, -0.6],
];

function CentralSphere(): React.ReactElement {
  const meshRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.22;
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.85, 32, 32]} />
      <meshBasicMaterial color={DIC_CYAN} wireframe />
    </mesh>
  );
}

function GlowCore(): React.ReactElement {
  const meshRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.9, 16, 16]} />
      <meshBasicMaterial color={DIC_BLUE} transparent opacity={0.15} />
    </mesh>
  );
}

function ConnectionLines(): React.ReactElement {
  const lineRef = useRef<LineSegments>(null);
  const positions = useMemo(() => {
    const center = new THREE.Vector3(0, 0, 0);
    const points: number[] = [];
    NODE_POSITIONS.forEach((pos) => {
      points.push(center.x, center.y, center.z, pos[0], pos[1], pos[2]);
    });
    const indices = [0, 1, 2, 3, 4, 5];
    for (let i = 0; i < indices.length; i++) {
      for (let j = i + 1; j < Math.min(i + 3, indices.length); j++) {
        const ii = indices[i];
        const jj = indices[j];
        if (ii === undefined || jj === undefined) continue;
        const a = NODE_POSITIONS[ii];
        const b = NODE_POSITIONS[jj];
        if (!a || !b) continue;
        points.push(a[0], a[1], a[2], b[0], b[1], b[2]);
      }
    }
    return new Float32Array(points);
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color={DIC_CYAN} transparent opacity={0.85} />
    </lineSegments>
  );
}

function NetworkNodes(): React.ReactElement {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });
  return (
    <group ref={groupRef}>
      {NODE_POSITIONS.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshBasicMaterial color={WHITE} />
        </mesh>
      ))}
    </group>
  );
}

function DataParticles(): React.ReactElement {
  const pointsRef = useRef<Points>(null);
  const count = 400;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 0.5 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.08;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial size={0.02} color={DIC_CYAN} transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

export default function HeroScene(): React.ReactElement {
  return (
    <>
      <color attach="background" args={["#0a0e17"]} />
      <GlowCore />
      <CentralSphere />
      <DataParticles />
      <ConnectionLines />
      <NetworkNodes />
    </>
  );
}
