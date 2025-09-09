import React from "react";
import backImg from "../assets/Back.jpeg";

function Back() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full bg-white rounded-2xl shadow-lg p-6">
        
        {/* Left Section - Image */}
        <div className="flex items-center justify-center">
          <img
            src={backImg}
            alt="Back Muscles"
            className="rounded-2xl shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Right Section - Info */}
        <div className="space-y-4 text-gray-800 overflow-y-auto max-h-[80vh] pr-2">
          <h1 className="text-3xl font-bold">Back Muscles</h1>
          <p>
            The back muscles are a complex, layered network responsible for spine stability,
            posture, movement, and the coordination of upper and lower limbs. Ignoring back training
            can lead to pain, poor posture, reduced athletic ability, and a greater risk of injury.
          </p>

          <h2 className="text-2xl font-semibold">Main Back Muscle Groups and Anatomy</h2>
          <p>
            Back muscles are categorized into two main groups:
          </p>
          <ul className="list-disc ml-6">
            <li><strong>Extrinsic (Superficial & Intermediate) Muscles:</strong> Control arm movements and help with respiration.</li>
            <li><strong>Intrinsic (Deep) Muscles:</strong> Stabilize the spine and control posture, split into superficial, intermediate, and deep sub-layers.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Extrinsic Back Muscles</h2>
          <ul className="list-disc ml-6">
            <li><strong>Trapezius:</strong> Large, upper back muscle; moves and stabilizes the scapula and neck.</li>
            <li><strong>Latissimus Dorsi:</strong> Broad, lower back muscle; connects spine to upper arm, powers pulling motions.</li>
            <li><strong>Levator Scapulae:</strong> Elevates the scapula, assists neck movement.</li>
            <li><strong>Rhomboids (Major & Minor):</strong> Retracts and stabilizes the scapula.</li>
            <li><strong>Serratus Posterior Superior/Inferior:</strong> Assist with breathing by moving the ribs.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Intrinsic (Deep) Back Muscles</h2>
          <ul className="list-disc ml-6">
            <li><strong>Erector Spinae Group:</strong> Upright posture, back extension, lateral flexion.</li>
            <li><strong>Transversospinalis Group:</strong> Fine control, stabilization, spinal extension, rotation.</li>
            <li><strong>Segmental Muscles (Deepest):</strong> Interspinales, Intertransversarii, Levatores costarum.</li>
            <li><strong>Quadratus Lumborum:</strong> Stabilizes lumbar spine, assists lateral flexion.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Why Back Training Is Important</h2>
          <ul className="list-disc ml-6">
            <li><strong>Posture and Spinal Health:</strong> Prevents slouching, chronic pain, and injury.</li>
            <li><strong>Mobility & Daily Function:</strong> Essential for bending, twisting, lifting, rotating.</li>
            <li><strong>Sports Performance:</strong> Key in running, throwing, jumping, pulling.</li>
            <li><strong>Injury Prevention:</strong> Prevents disc injuries, strains, postural pain.</li>
            <li><strong>Upper/Lower Limb Coordination:</strong> Links the shoulder girdle to the trunk.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Back;
