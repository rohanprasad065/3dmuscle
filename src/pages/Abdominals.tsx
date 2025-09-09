import React from 'react';
import abs from "../assets/abs.jpeg";
import abs2 from "../assets/abs2.jpeg";

function Abdominals() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6">
      {/* Left Side - Image */}
      <div className="flex-1">
        <img src={abs} alt="Abdominal Muscles" className="rounded-2xl shadow-lg w-full" />
      </div>

      {/* Center Content */}
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-bold text-center md:text-left">Main Abdominal Muscles and Anatomy</h1>
        <p>The primary abdominal muscles include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Rectus Abdominis</strong> – Trunk flexion, stabilizing the pelvis.</li>
          <li><strong>External Obliques</strong> – Rotation, lateral flexion, compression.</li>
          <li><strong>Internal Obliques</strong> – Trunk rotation and stabilization.</li>
          <li><strong>Transversus Abdominis</strong> – Deep core stabilization, posture.</li>
          <li><strong>Pyramidalis</strong> – Tenses the linea alba, minor role in strength.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4">Why Abdominal Training Is Important</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provides <strong>stability</strong> for movement and injury prevention.</li>
          <li>Supports <strong>posture</strong> and spinal alignment.</li>
          <li><strong>Protects</strong> the spine and reduces lower back injury risks.</li>
          <li>Boosts <strong>athletic performance</strong> in sports and daily life.</li>
          <li>Aids in <strong>breathing and functional movement</strong>.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4">Training Methods</h2>
        <table className="w-full border border-gray-400 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-2 py-1">Muscle</th>
              <th className="border px-2 py-1">Function</th>
              <th className="border px-2 py-1">Key Exercises</th>
              <th className="border px-2 py-1">Importance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">Rectus Abdominis</td>
              <td className="border px-2 py-1">Trunk flexion, stability</td>
              <td className="border px-2 py-1">Crunch, Sit-up, Leg raise</td>
              <td className="border px-2 py-1">Power, posture</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">External Oblique</td>
              <td className="border px-2 py-1">Rotation, side bend</td>
              <td className="border px-2 py-1">Russian twist, Bicycle crunch</td>
              <td className="border px-2 py-1">Spinal protection</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Internal Oblique</td>
              <td className="border px-2 py-1">Rotation, flexion</td>
              <td className="border px-2 py-1">Twisting sit-up, Side plank</td>
              <td className="border px-2 py-1">Core balance</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Transversus Abdominis</td>
              <td className="border px-2 py-1">Compression, stabilization</td>
              <td className="border px-2 py-1">Plank, Stomach vacuum</td>
              <td className="border px-2 py-1">Spinal and organ support</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">Pyramidalis</td>
              <td className="border px-2 py-1">Linea alba tension</td>
              <td className="border px-2 py-1">Bracing during ab exercises</td>
              <td className="border px-2 py-1">Abdominal wall integrity</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1">
        <img src={abs2} alt="Abdominal Muscles Side View" className="rounded-2xl shadow-lg w-full" />
      </div>
    </div>
  );
}

export default Abdominals;
