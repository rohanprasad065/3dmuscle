import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import trapsDetailImg from "../assets/trapsderail.jpeg"; // Image for right side

function TrapsModel() {
  const { scene } = useGLTF("/back.glb"); // Load 3D model from public folder
  return <primitive object={scene} scale={2} />;
}

function Traps() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left side: 3D model */}
      <div className="w-1/2 bg-gray-100 flex items-center justify-center h-screen p-6">
        <Canvas className="w-full h-full" camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <TrapsModel />
          </Suspense>
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>

      {/* Right side: Detailed info */}
      <div className="w-1/2 p-10 overflow-y-auto h-screen">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Trapezius Muscle (Traps)
        </h1>

        <p className="text-gray-700 mb-4">
          The trapezius is a large, broad, superficial muscle on the upper back,
          neck, and shoulders, shaped roughly like a trapezoid. It plays a crucial
          role in moving, stabilizing, and supporting the scapula and neck. Divided
          into three functionally distinct parts: upper (descending), middle
          (transverse), and lower (ascending) fibers.
        </p>

        {/* Detailed Anatomy */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Detailed Anatomy</h2>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>
              <strong>Upper (Descending) Fibers:</strong> Origin: External occipital
              protuberance, medial third of superior nuchal line, ligamentum nuchae,
              spinous process of C7. Insertion: Posterior border of lateral third of
              clavicle. Function: Elevates scapula, assists head/neck extension,
              lateral flexion, rotation.
            </li>
            <li>
              <strong>Middle (Transverse) Fibers:</strong> Origin: Spinous processes
              of C7 to T3/T4. Insertion: Medial margin of acromion & spine of scapula.
              Function: Retracts scapula, stabilizes shoulder blade.
            </li>
            <li>
              <strong>Lower (Ascending) Fibers:</strong> Origin: Spinous processes T4
              to T12. Insertion: Tubercle at apex of scapular spine. Function:
              Depresses and medially rotates scapula, assists in full arm elevation.
            </li>
          </ul>
        </section>

        {/* Key Functions */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Key Functions</h2>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>Elevates, depresses, retracts, and rotates scapula.</li>
            <li>Extends the neck and stabilizes clavicle.</li>
            <li>Critical for overhead arm movements and posture.</li>
            <li>Supports spinal column stability.</li>
          </ul>
        </section>

        {/* Why Train */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Why Train the Trapezius</h2>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li>Improves posture and counteracts forward head/rounded shoulders.</li>
            <li>Reduces risk of shoulder and neck injuries.</li>
            <li>Enhances athletic performance in lifting, throwing, and contact sports.</li>
            <li>Relieves neck pain and strain on upper back muscles.</li>
            <li>Aesthetically improves upper back and neck appearance.</li>
          </ul>
        </section>

        {/* Training Exercises */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">How to Train</h2>
          <h3 className="text-xl font-semibold mb-1">Upper Trapezius (Shrugs)</h3>
          <ul className="list-disc ml-5 space-y-1 text-gray-700 mb-3">
            <li>Dumbbell or Barbell Shrugs: Lift shoulders toward ears slowly.</li>
            <li>Cable Shrugs: Shrug shoulders resisting cable weight.</li>
            <li>Farmer’s Walk: Carry heavy weights while maintaining posture.</li>
            <li>Frequency: 3 sets of 10-15 reps.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-1">Middle Trapezius (Scapular Retraction)</h3>
          <ul className="list-disc ml-5 space-y-1 text-gray-700 mb-3">
            <li>Rows (Seated, Bent-over, Cable): Squeeze shoulder blades together.</li>
            <li>Face Pulls: Pull rope toward face, focus on scapula.</li>
            <li>Reverse Flys: Pull shoulders backward.</li>
            <li>Frequency: 3 sets of 12-15 reps.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-1">Lower Trapezius (Depression & Rotation)</h3>
          <ul className="list-disc ml-5 space-y-1 text-gray-700 mb-3">
            <li>Prone Y Raises: Raise arms lying face down.</li>
            <li>Scapular Depression Pull-downs: Depress scapula while pulling bar down.</li>
            <li>Wall Slides: Slide arms upward against wall keeping scapula down/back.</li>
            <li>Frequency: 3 sets of 12-15 reps.</li>
          </ul>

          <p className="text-gray-700 mt-2">
            <strong>Tips:</strong> Use controlled motion, combine all portions,
            include isometric holds, warm up, avoid overtraining, maintain posture.
          </p>
        </section>

        {/* Optional Image */}
        <div className="mt-6">
          <img
            src={trapsDetailImg}
            alt="Trapezius Details"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Traps;
