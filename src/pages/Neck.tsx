import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import neckDetailImg from "../assets/neckdetail.jpeg"; // Optional image

function NeckModel() {
  const { scene } = useGLTF("/neck.glb"); // Load GLB from public folder
  return <primitive object={scene} scale={2} />;
}

function Neck() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left side: 3D model */}
      <div className="w-1/2 bg-gray-100 flex items-center justify-center h-screen p-6">
        <Canvas className="w-full h-full" camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <NeckModel />
          </Suspense>
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>

      {/* Right side: Detailed info */}
      <div className="w-1/2 p-10 overflow-y-auto h-screen">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Main Groups of Neck Muscles
        </h1>

        {/* Anterior Neck Muscles */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Anterior (Front) Neck Muscles</h2>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li><strong>Platysma:</strong> Thin sheet across the front of the neck, involved in facial expressions.</li>
            <li><strong>Sternocleidomastoid:</strong> Runs from sternum & clavicle to mastoid process. Functions: Neck flexion, rotation to opposite side, assists with breathing.</li>
            <li><strong>Suprahyoid Muscles:</strong> Digastric, Mylohyoid, Geniohyoid, Stylohyoid — above hyoid bone, involved in swallowing and tongue movement.</li>
            <li><strong>Infrahyoid Muscles:</strong> Omohyoid, Sternohyoid, Thyrohyoid, Sternothyroid — below hyoid bone, crucial for speech and swallowing.</li>
            <li><strong>Longus Capitis & Longus Colli:</strong> Deep muscles, flex neck and stabilize cervical spine.</li>
          </ul>
        </section>

        {/* Lateral Neck Muscles */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Lateral (Side) Neck Muscles</h2>
          <p className="text-gray-700">
            <strong>Scalene Muscles (Anterior, Middle, Posterior):</strong> Neck flexion, lateral bending, stabilize cervical vertebrae, assist deep breathing.
          </p>
        </section>

        {/* Posterior Neck Muscles */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Posterior (Back) Neck Muscles</h2>
          <ul className="list-disc ml-5 space-y-2 text-gray-700">
            <li><strong>Trapezius:</strong> Extension, lateral flexion, rotation of the neck.</li>
            <li><strong>Splenius Capitis & Cervicis:</strong> Neck extension, rotation, lateral flexion.</li>
            <li><strong>Semispinalis, Multifidus, Rotatores:</strong> Fine control and stabilization of neck movements.</li>
            <li><strong>Suboccipital Muscles:</strong> Precise head movements.</li>
          </ul>
        </section>

        {/* Neck Training */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Training Neck Muscles</h2>
          <p className="text-gray-700 mb-2">
            Most neck training targets Sternocleidomastoid, Trapezius (upper), Scalene, Suboccipital & Deep Neck Flexors, Splenius Capitis & Cervicis.
          </p>
          <ul className="list-decimal ml-5 space-y-2 text-gray-700">
            <li><strong>Neck Flexion (Chin Tucks):</strong> 10-15 reps, target sternocleidomastoid & longus colli.</li>
            <li><strong>Neck Extension:</strong> Tilt head back, 10-15 reps, target trapezius & splenius.</li>
            <li><strong>Lateral Flexion:</strong> Ear to shoulder, 10-15 reps each side, target sternocleidomastoid & scalene.</li>
            <li><strong>Neck Rotation:</strong> Turn head side to side, 10-15 reps each side.</li>
            <li><strong>Isometric Holds:</strong> Resist force in all directions, strengthen deep stabilizers.</li>
            <li><strong>Neck Bridges (Advanced):</strong> High-risk exercise, train neck extensors & traps.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            <strong>Tips:</strong> Warm up, progress gradually, slow controlled movements, maintain posture, stop if pain occurs. Train 2-3 times per week.
          </p>
        </section>

        {/* Optional Image */}
        <div className="mt-6">
          <img
            src={neckDetailImg}
            alt="Neck Details"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Neck;
