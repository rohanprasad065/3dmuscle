import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import chestImg from "../assets/Chest.jpeg";

function ChestModel() {
  const { scene } = useGLTF("/chest.glb");
  return <primitive object={scene} scale={2.2} />;
}

const Chest: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-white rounded-2xl shadow-lg">
      {/* Left: 3D Model */}
      <div className="w-full h-[500px] bg-gray-50 rounded-2xl flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <ChestModel />
          </Suspense>
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>

      {/* Right: Info & Image */}
<div className="flex flex-col justify-between rounded-2xl p-4 overflow-y-auto">
  <div>
    <h2 className="text-2xl font-semibold mb-4">Main Chest Muscles and Anatomy</h2>
    <p className="text-gray-600 mb-4">
      The chest consists of four prominent muscles:
    </p>
    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
      <li>Pectoralis Major</li>
      <li>Pectoralis Minor</li>
      <li>Serratus Anterior</li>
      <li>Subclavius</li>
    </ul>

    {/* Pectoralis Major */}
    <h3 className="text-xl font-semibold mb-2">Pectoralis Major</h3>
    <p className="text-gray-600 mb-2">
      <strong>Structure:</strong> Large, fan-shaped muscle with two heads—clavicular (upper) and sternocostal (lower).
    </p>
    <p className="text-gray-600 mb-2">
      <strong>Function:</strong> Adducts (brings arm toward body), flexes, extends, and internally rotates the humerus.
    </p>
    <p className="text-gray-600 mb-2">
      <strong>Training:</strong> Bench press, push-ups, dumbbell flyes, incline and decline presses.
    </p>
    <p className="text-gray-600 mb-4">
      <strong>Importance:</strong> Responsible for most pressing movements, contributes to upper body power, protects the shoulder joint.
    </p>

    {/* Repeat similar blocks for Pectoralis Minor, Serratus Anterior, Subclavius */}

    <h3 className="text-xl font-semibold mb-2">Why Chest Training Is Important</h3>
    <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
      <li><strong>Daily Activities:</strong> Pushing motions like opening doors, lifting, carrying.</li>
      <li><strong>Strength & Posture:</strong> Enhances posture and stability.</li>
      <li><strong>Metabolic Benefits:</strong> Large chest muscles aid glucose metabolism.</li>
      <li><strong>Injury Prevention:</strong> Protects shoulders and prevents injuries.</li>
      <li><strong>Aesthetics:</strong> Contributes to a sculpted, powerful appearance.</li>
    </ul>

    {/* Sample Training Table */}
    <div className="overflow-x-auto mb-6">
      <table className="w-full border border-gray-200 text-left rounded-2xl overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Muscle</th>
            <th className="p-2 border">Main Functions</th>
            <th className="p-2 border">Best Exercises</th>
            <th className="p-2 border">Importance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">Pectoralis Major</td>
            <td className="p-2 border">Adduction, Flexion, Rotation</td>
            <td className="p-2 border">Bench press, Flyes, Push-ups</td>
            <td className="p-2 border">Power, strength, movement</td>
          </tr>
          <tr>
            <td className="p-2 border">Pectoralis Minor</td>
            <td className="p-2 border">Scapula stabilization</td>
            <td className="p-2 border">Dips, Push-ups, Scapular Raises</td>
            <td className="p-2 border">Stability, posture</td>
          </tr>
          <tr>
            <td className="p-2 border">Serratus Anterior</td>
            <td className="p-2 border">Scapular protraction, Rotation</td>
            <td className="p-2 border">Push-up plus, Overhead press</td>
            <td className="p-2 border">Shoulder health</td>
          </tr>
          <tr>
            <td className="p-2 border">Subclavius</td>
            <td className="p-2 border">Clavicle stabilization</td>
            <td className="p-2 border">Overhead lifts, pressing</td>
            <td className="p-2 border">Joint support</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-xl font-semibold mb-2">Additional Insights</h3>
    <p className="text-gray-600 mb-4">
      A balanced chest routine should be paired with back and shoulder work to avoid muscle imbalances.
      Progressive overload, incline/decline variations, and safe lifting technique are essential.
      Chest training boosts performance, daily function, and body composition.
    </p>
  </div>


        {/* Bottom Image */}
        <div className="mt-6">
          <img
            src={chestImg}
            alt="Chest Muscles"
            className="w-full rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Chest;
