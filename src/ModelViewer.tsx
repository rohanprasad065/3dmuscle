import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";

const MODEL_PATH = "/ecorcheanatomystudy/scene.gltf";

function Model() {
  const { scene } = useGLTF(MODEL_PATH) as { scene: THREE.Group };
  const ref = useRef<THREE.Group>(null);
  const { camera, controls } = useThree();

  useEffect(() => {
    if (ref.current) {
      // Compute bounding box
      const box = new THREE.Box3().setFromObject(ref.current);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // Center model
      ref.current.position.x += ref.current.position.x - center.x;
      ref.current.position.y += ref.current.position.y - center.y;
      ref.current.position.z += ref.current.position.z - center.z;

      // Adjust camera to fit model
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
      cameraZ *= 1.5; // add margin
      camera.position.set(0, 0, cameraZ);

      camera.near = 0.01;
      camera.far = cameraZ * 10;
      camera.updateProjectionMatrix();

      if (controls) {
        controls.target.copy(center);
        controls.update();
      }
    }
  }, [scene, camera, controls]);

  return <primitive ref={ref} object={scene} />;
}

// Preload the model
useGLTF.preload(MODEL_PATH);

function Loader() {
  return (
    <Html center>
      <div style={{ color: "black", fontSize: "20px" }}>⏳ Loading...</div>
    </Html>
  );
}

const ModelViewer: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50, near: 0.01, far: 5000 }}
      style={{ backgroundColor: "#808080", width: "50vw", height: "100vh" }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          console.warn("⚠️ WebGL context lost");
        });
        gl.domElement.addEventListener("webglcontextrestored", () => {
          console.warn("✅ WebGL context restored");
        });
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>

      <OrbitControls enableDamping dampingFactor={0.1} />
    </Canvas>
  );
};

export default ModelViewer;
