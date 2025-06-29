import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 blur-[2px] opacity-20">
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} />
        <Sphere visible args={[1, 100, 200]} scale={2.8}>
          <MeshDistortMaterial
            color="#00ffff"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0}
          />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
