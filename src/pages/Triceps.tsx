import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import tricepsImg from "../assets/Triceps.jpeg";

// 3D Model Loader
function ArmModel() {
  const { scene } = useGLTF("/arm.glb");
  return <primitive object={scene} scale={2} position={[0, -1, 0]} />;
}

function Triceps() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full bg-white rounded-2xl shadow-lg p-6">
        
        {/* Left Section - Info */}
        <div className="space-y-4 text-gray-800 overflow-y-auto max-h-[80vh] pr-2">
          <h1 className="text-3xl font-bold">Triceps Brachii</h1>
          <p>
            The triceps brachii, or simply triceps, is a large muscle on the back of the upper arm 
            responsible mainly for extending the elbow joint, playing a vital role in pushing movements and arm stabilization.
          </p>

          <h2 className="text-2xl font-semibold">Triceps Muscle Anatomy</h2>
          <ul className="list-disc ml-6">
            <li><strong>Heads:</strong> Long, Lateral, Medial.</li>
            <li><strong>Insertion:</strong> Olecranon process of ulna.</li>
            <li><strong>Innervation:</strong> Radial nerve (C6–C8).</li>
            <li><strong>Blood Supply:</strong> Deep brachial & superior ulnar collateral arteries.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Functions</h2>
          <ul className="list-disc ml-6">
            <li><strong>Elbow Extension:</strong> Straightens the arm.</li>
            <li><strong>Shoulder Actions:</strong> Assists extension & adduction.</li>
            <li><strong>Joint Stabilization:</strong> Supports elbow & shoulder.</li>
            <li><strong>Movement Roles:</strong> Active in pushing (push-ups, dips, bench press).</li>
          </ul>

          <h2 className="text-2xl font-semibold">Importance of Training</h2>
          <ul className="list-disc ml-6">
            <li>Functional strength for pushing & lifting.</li>
            <li>Athletic performance in throwing, punching, pressing.</li>
            <li>Balanced arm development with biceps.</li>
            <li>Joint health & injury prevention.</li>
          </ul>

          <h2 className="text-2xl font-semibold">How to Train</h2>
          <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Head</th>
                <th className="p-2 border">Function</th>
                <th className="p-2 border">Key Exercises</th>
                <th className="p-2 border">Tips</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Long Head</td>
                <td className="p-2 border">Elbow & shoulder extension</td>
                <td className="p-2 border">Overhead extensions, dips</td>
                <td className="p-2 border">Train with arm overhead</td>
              </tr>
              <tr>
                <td className="p-2 border">Lateral Head</td>
                <td className="p-2 border">Elbow extension</td>
                <td className="p-2 border">Pushdowns, close-grip bench</td>
                <td className="p-2 border">Focus on heavy resistance</td>
              </tr>
              <tr>
                <td className="p-2 border">Medial Head</td>
                <td className="p-2 border">Elbow extension, fine control</td>
                <td className="p-2 border">Kickbacks, rope pushdowns</td>
                <td className="p-2 border">High rep, controlled form</td>
              </tr>
              <tr>
                <td className="p-2 border">Whole Muscle</td>
                <td className="p-2 border">Overall extension & posture</td>
                <td className="p-2 border">Push-ups, skull crushers</td>
                <td className="p-2 border">Mix compound + isolation</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-semibold">Neglecting Triceps Training</h2>
          <ul className="list-disc ml-6">
            <li>Weakened pushing strength.</li>
            <li>Muscle imbalance with biceps.</li>
            <li>Poor arm aesthetics.</li>
            <li>Higher risk of elbow & shoulder injury.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Additional Info</h2>
          <p>
            The triceps work with the anconeus to extend the forearm. The long head 
            also creates important anatomical spaces for nerves & vessels. Progressive 
            overload with correct form prevents injuries like tendonitis.
          </p>

          <div className="mt-6">
            <img
              src={tricepsImg}
              alt="Triceps Anatomy"
              className="rounded-2xl shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Section - 3D Model */}
        <div className="flex items-center justify-center bg-gray-100 rounded-2xl">
          <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
              <ArmModel />
            </Suspense>
            <OrbitControls enableZoom={true} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Triceps;
