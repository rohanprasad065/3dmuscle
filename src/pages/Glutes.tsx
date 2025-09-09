import React from "react";
import glutesImg from "../assets/Glutes.jpg";

function Glutes() {
  return (
    <div className="flex h-screen">
      {/* Left Section - Information */}
      <div className="w-1/2 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Gluteal Muscles</h1>
        <p className="text-lg leading-relaxed mb-6">
          The glutes are a group of three main muscles forming the buttock
          region, playing crucial roles in hip movement, posture, core stability,
          and powerful lower body actions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Main Gluteal Muscles and Anatomy
        </h2>

        <h3 className="text-xl font-medium mt-4 mb-2">Gluteus Maximus</h3>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>
            <strong>Largest & superficial:</strong> Shapes the buttocks.
          </li>
          <li>
            <strong>Origin:</strong> Sacrum, coccyx, ilium, sacrotuberous
            ligament, thoracolumbar fascia.
          </li>
          <li>
            <strong>Insertion:</strong> Iliotibial tract, gluteal tuberosity of
            femur.
          </li>
          <li>
            <strong>Innervation:</strong> Inferior gluteal nerve (L5–S2).
          </li>
          <li>
            <strong>Blood Supply:</strong> Inferior & superior gluteal arteries.
          </li>
          <li>
            <strong>Functions:</strong> Hip extension, external rotation,
            abduction/adduction, pelvic stability, trunk rise.
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-4 mb-2">Gluteus Medius</h3>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>
            Lies beneath maximus, partly covered by it.
          </li>
          <li>
            <strong>Origin:</strong> Gluteal surface of ilium between anterior &
            posterior gluteal lines.
          </li>
          <li>
            <strong>Insertion:</strong> Lateral greater trochanter of femur.
          </li>
          <li>
            <strong>Innervation:</strong> Superior gluteal nerve (L4–S1).
          </li>
          <li>
            <strong>Blood Supply:</strong> Superior gluteal artery.
          </li>
          <li>
            <strong>Functions:</strong> Abduction, internal rotation, pelvis
            stabilization.
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-4 mb-2">Gluteus Minimus</h3>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Smallest & deepest gluteal muscle.</li>
          <li>
            <strong>Origin:</strong> Ilium between anterior & inferior gluteal
            lines.
          </li>
          <li>
            <strong>Insertion:</strong> Anterolateral greater trochanter.
          </li>
          <li>
            <strong>Innervation & Blood Supply:</strong> Same as medius.
          </li>
          <li>
            <strong>Functions:</strong> Works with medius for abduction, internal
            rotation, stabilization.
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-4 mb-2">
          Tensor Fasciae Latae (TFL)
        </h3>
        <p className="mb-4">
          Small muscle on anterolateral thigh linked to iliotibial tract. Aids
          in thigh abduction, hip/knee stabilization, external rotation.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Importance of Training Glutes
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Stabilizes pelvis & prevents hip/lower back pain.</li>
          <li>Generates power for running, climbing, lifting.</li>
          <li>Supports posture & balance in single-leg activities.</li>
          <li>
            Prevents injuries (knee instability, IT band issues, back pain).
          </li>
          <li>
            Aesthetic benefits → rounded, firm buttocks.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Recommended Training Exercises
        </h2>
        <table className="w-full border-collapse border text-sm mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Muscle</th>
              <th className="border p-2">Function</th>
              <th className="border p-2">Exercises</th>
              <th className="border p-2">Training Tips</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Gluteus Maximus</td>
              <td className="border p-2">Hip extension, external rotation</td>
              <td className="border p-2">Deadlifts, hip thrusts, squats</td>
              <td className="border p-2">Mix heavy & high reps</td>
            </tr>
            <tr>
              <td className="border p-2">Gluteus Medius</td>
              <td className="border p-2">Abduction, pelvis stabilization</td>
              <td className="border p-2">Clamshells, band walks</td>
              <td className="border p-2">Control & stabilization focus</td>
            </tr>
            <tr>
              <td className="border p-2">Gluteus Minimus</td>
              <td className="border p-2">Assists abduction</td>
              <td className="border p-2">Step-ups, side leg raises</td>
              <td className="border p-2">Slow, controlled motion</td>
            </tr>
            <tr>
              <td className="border p-2">TFL</td>
              <td className="border p-2">Abduction, hip/knee stability</td>
              <td className="border p-2">Lateral lunges, side leg lifts</td>
              <td className="border p-2">Balance & coordination</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Additional Details</h2>
        <p className="mb-4">
          • Gluteus maximus is active during walking, climbing, and trunk lift.
          <br />
          • Medius & minimus stabilize pelvis in walking/standing.
          <br />
          • Balanced training prevents knee/lower back injuries.
          <br />
          • Activation complements core muscles for performance.
        </p>

        <p className="font-semibold">
          Training the glutes supports hip power, posture, injury prevention, and
          aesthetics, making them fundamental muscles for strength, mobility, and
          performance.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100 p-6">
        <img
          src={glutesImg}
          alt="Glute Muscles"
          className="max-h-[90%] rounded-2xl shadow-lg object-contain"
        />
      </div>
    </div>
  );
}

export default Glutes;
