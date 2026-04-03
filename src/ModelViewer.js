import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
const MODEL_PATH = "/ecorcheanatomystudy/scene.gltf";
function Model() {
    const { scene } = useGLTF(MODEL_PATH);
    const ref = useRef(null);
    const { camera } = useThree();
    useEffect(() => {
        if (ref.current) {
            const box = new THREE.Box3().setFromObject(ref.current);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            // Center model
            ref.current.position.sub(center);
            // Ensure camera is PerspectiveCamera
            if (camera.isPerspectiveCamera) {
                const cam = camera;
                const maxDim = Math.max(size.x, size.y, size.z);
                const fov = (cam.fov * Math.PI) / 180;
                let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
                cameraZ *= 1.5;
                cam.position.set(0, 0, cameraZ);
                cam.near = 0.01;
                cam.far = cameraZ * 10;
                cam.updateProjectionMatrix();
            }
        }
    }, [scene, camera]);
    return _jsx("primitive", { ref: ref, object: scene });
}
// Preload
useGLTF.preload(MODEL_PATH);
function Loader() {
    return (_jsx(Html, { center: true, children: _jsx("div", { style: { color: "black", fontSize: "20px" }, children: "\u23F3 Loading..." }) }));
}
const ModelViewer = () => {
    return (_jsxs(Canvas, { camera: { position: [0, 0, 5], fov: 50, near: 0.01, far: 5000 }, style: {
            backgroundColor: "#808080",
            width: "100%", // 🔥 FIXED RESPONSIVENESS
            height: "100vh",
        }, children: [_jsx("ambientLight", { intensity: 0.5 }), _jsx("directionalLight", { position: [5, 5, 5] }), _jsx(Suspense, { fallback: _jsx(Loader, {}), children: _jsx(Model, {}) }), _jsx(OrbitControls, { enableDamping: true, dampingFactor: 0.1 })] }));
};
export default ModelViewer;
