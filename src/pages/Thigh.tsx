import React from "react";
import Quadriceps from "../assets/Quadriceps.jpeg";
import Hamstrings from "../assets/Hamstrings.jpeg";
import Adductors from "../assets/Adductors.jpeg";

function Thigh() {
  return (
    <div className="flex flex-col gap-12 p-6">
      {/* Quadriceps Section */}
      <div className="grid grid-cols-2 gap-6 items-start">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={Quadriceps}
            alt="Quadriceps"
            className="w-[400px] rounded-2xl shadow-lg"
          />
        </div>
        {/* Right: Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Thigh Muscles Overview</h2>
          <p>
            The thigh is home to some of the largest and most powerful muscles
            in the human body. These muscles are essential for various movements
            such as bending, extending, rotating, and stabilizing the hip and
            knee joints. The thigh muscles are divided into three primary groups
            based on their anatomical location: anterior (front), medial
            (inner), and posterior (back) compartments.
          </p>

          <h3 className="text-xl font-semibold">Anterior Compartment</h3>
          <p>
            <strong>Primary Muscles:</strong> Quadriceps femoris (rectus
            femoris, vastus lateralis, vastus medialis, vastus intermedius),
            sartorius.
          </p>
          <p>
            <strong>Functions:</strong> Extends the leg at the knee; rectus
            femoris also flexes the hip.
          </p>
          <p>
            <strong>Importance:</strong> Crucial for walking, running, jumping,
            and stabilizing the knee joint.
          </p>
        </div>
      </div>

      {/* Adductors Section */}
      <div className="grid grid-cols-2 gap-6 items-start">
        <div className="flex justify-center">
          <img
            src={Adductors}
            alt="Adductors"
            className="w-[400px] rounded-2xl shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Medial Compartment (Adductors)</h3>
          <p>
            <strong>Primary Muscles:</strong> Adductor longus, adductor brevis,
            adductor magnus, gracilis, pectineus.
          </p>
          <p>
            <strong>Functions:</strong> Adduct the thigh (bring it toward the
            body’s midline), assist in hip flexion and rotation.
          </p>
          <p>
            <strong>Importance:</strong> Maintain balance and control during
            walking and side-to-side movements.
          </p>
        </div>
      </div>

      {/* Hamstrings Section */}
      <div className="grid grid-cols-2 gap-6 items-start">
        <div className="flex justify-center">
          <img
            src={Hamstrings}
            alt="Hamstrings"
            className="w-[400px] rounded-2xl shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Posterior Compartment</h3>
          <p>
            <strong>Primary Muscles:</strong> Hamstrings - biceps femoris,
            semitendinosus, semimembranosus.
          </p>
          <p>
            <strong>Functions:</strong> Flex the knee and extend the hip (e.g.,
            moving the leg backward).
          </p>
          <p>
            <strong>Importance:</strong> Vital for running, jumping, and hip and
            knee stabilization.
          </p>
        </div>
      </div>

      {/* Full Importance Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Importance of Training Thigh Muscles</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Movement and Mobility:</strong> Strong thigh muscles are
            essential for powerful, coordinated movements like walking, climbing
            stairs, and athletic performance.
          </li>
          <li>
            <strong>Joint Stability:</strong> They stabilize the hip and knee
            joints, preventing injuries such as ACL tears or hip instability.
          </li>
          <li>
            <strong>Balance and Posture:</strong> Well-developed thigh muscles
            improve overall posture and balance, reducing fall risk especially
            in older adults.
          </li>
          <li>
            <strong>Injury Prevention:</strong> Balanced strength in quadriceps,
            hamstrings, and adductors helps avoid muscle imbalances and related
            injuries.
          </li>
          <li>
            <strong>Weight Bearing:</strong> Thigh muscles support the body
            weight during standing and movement.
          </li>
        </ul>
      </div>

      {/* Training Recommendations */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Training Recommendations and Exercises
        </h2>
        <table className="w-full border border-gray-400 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-3 py-2">Muscle Group</th>
              <th className="border px-3 py-2">Main Functions</th>
              <th className="border px-3 py-2">Key Exercises</th>
              <th className="border px-3 py-2">Training Tips</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">Quadriceps (Anterior)</td>
              <td className="border px-3 py-2">Knee extension, hip flexion</td>
              <td className="border px-3 py-2">
                Squats, leg press, lunges, leg extension
              </td>
              <td className="border px-3 py-2">Use varied angles and loads</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Hamstrings (Posterior)</td>
              <td className="border px-3 py-2">Knee flexion, hip extension</td>
              <td className="border px-3 py-2">
                Deadlifts, hamstring curls, glute-ham raises
              </td>
              <td className="border px-3 py-2">
                Stretch and balance with quads
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Adductors (Medial)</td>
              <td className="border px-3 py-2">
                Thigh adduction, hip rotation
              </td>
              <td className="border px-3 py-2">
                Side lunges, sumo squats, adduction machines
              </td>
              <td className="border px-3 py-2">
                Strengthen for hip stability
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2">Sartorius</td>
              <td className="border px-3 py-2">
                Hip flexion, abduction, external rotation, knee flexion
              </td>
              <td className="border px-3 py-2">
                Step-ups, lunges, stretching
              </td>
              <td className="border px-3 py-2">
                Supports combined hip/knee actions
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Additional Details */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Additional Details</h2>
        <p>
          The iliopsoas group (hip flexors) also contributes to thigh movement,
          important for hip flexion and trunk stability.
        </p>
        <p>
          Muscles like gluteus maximus also complement thigh muscle function in
          hip extension and stability.
        </p>
        <p>
          Regularly balance training between all compartments to prevent
          imbalances leading to poor movement patterns or injury.
        </p>
        <p>
          Proper warm-up and stretching maintain flexibility and muscle health.
        </p>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold">Summary</h2>
        <p>
          In summary, thigh muscles are fundamental for lower limb movement,
          stability, balance, and injury prevention. Training should target all
          three compartments with a balanced approach for optimal function and
          strength.
        </p>
      </div>
    </div>
  );
}

export default Thigh;
