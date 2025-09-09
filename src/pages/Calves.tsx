import React from "react";
import calf from "../assets/calf.jpeg";

function Calves() {
  return (
    <div className="flex flex-row h-screen">
      {/* Left Section - Image */}
      <div className="w-1/2 flex items-center justify-center bg-white p-4">
        <img
          src={calf}
          alt="Calf Muscles"
          className="max-h-full max-w-full object-contain rounded-xl shadow-lg"
        />
      </div>

      {/* Right Section - Info */}
      <div className="w-1/2 overflow-y-auto p-6 bg-[#fdfdfd]">
        <h1 className="text-3xl font-bold mb-4">Calf Muscles</h1>
        <p className="mb-4">
          The calf is the back portion of the lower leg and is made up primarily
          of two powerful muscles: the gastrocnemius and the soleus. These
          muscles play key roles in controlling ankle movement, supporting body
          weight, and propelling the body during walking, running, and jumping.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">
          Main Calf Muscles and Anatomy
        </h2>

        <h3 className="text-xl font-semibold mt-3">Gastrocnemius</h3>
        <p className="mb-2">
          The largest and most visible calf muscle with two heads (medial and
          lateral), originating just above the knee from the femur.
        </p>
        <p className="mb-2">
          It forms the bulk of the calf and attaches to the heel bone
          (calcaneus) via the Achilles tendon.
        </p>
        <p className="mb-4">
          <strong>Function:</strong> Primarily responsible for plantarflexion of
          the foot (pointing toes downward) when the knee is straight. Also
          assists knee flexion. Key for pushing off during walking, running, and
          jumping.
        </p>

        <h3 className="text-xl font-semibold mt-3">Soleus</h3>
        <p className="mb-2">
          Lies deep beneath the gastrocnemius, originating from the upper tibia
          and fibula, also connecting to the heel via the Achilles tendon.
        </p>
        <p className="mb-4">
          <strong>Function:</strong> Plantarflexion with the knee bent (such as
          when standing or walking). Provides endurance support for posture and
          balance. Active in continuous low-intensity activities.
        </p>

        <h3 className="text-xl font-semibold mt-3">Plantaris</h3>
        <p className="mb-4">
          A small, thin muscle occasionally present with minor function, acting
          alongside the gastrocnemius.
        </p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">
          Importance of Calf Training
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Movement and Propulsion:</strong> Calf muscles provide the
            push-off force critical for walking, running, jumping, and climbing.
          </li>
          <li>
            <strong>Balance and Postural Support:</strong> They help maintain
            balance by supporting body weight through the ankle, especially
            during standing.
          </li>
          <li>
            <strong>Preventing Injuries:</strong> Strong calves reduce the risk
            of strains, Achilles tendon injuries, and calf cramps.
          </li>
          <li>
            <strong>Circulatory Role:</strong> The soleus, termed the "second
            heart," pumps blood from the lower legs back toward the heart, aiding
            circulation.
          </li>
          <li>
            <strong>Endurance and Athletic Performance:</strong> Key muscles in
            endurance activities such as distance running and jumping sports.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4 mb-2">
          Recommended Exercises for Calves
        </h2>
        <table className="border border-gray-400 w-full text-left mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 p-2">Muscle</th>
              <th className="border border-gray-400 p-2">Function</th>
              <th className="border border-gray-400 p-2">Key Exercises</th>
              <th className="border border-gray-400 p-2">Training Tips</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">Gastrocnemius</td>
              <td className="border border-gray-400 p-2">
                Plantarflexion (knee extended), knee flexion
              </td>
              <td className="border border-gray-400 p-2">
                Standing calf raises, jump rope
              </td>
              <td className="border border-gray-400 p-2">
                Train with knee straight for activation
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Soleus</td>
              <td className="border border-gray-400 p-2">
                Plantarflexion (knee bent)
              </td>
              <td className="border border-gray-400 p-2">
                Seated calf raises
              </td>
              <td className="border border-gray-400 p-2">
                Train with knee bent for soleus emphasis
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Both</td>
              <td className="border border-gray-400 p-2">
                Ankle stability, propulsion
              </td>
              <td className="border border-gray-400 p-2">
                Hill sprints, plyometrics
              </td>
              <td className="border border-gray-400 p-2">
                Combine endurance and power work
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Additional Details</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            Flexing the knee reduces gastrocnemius involvement so seated
            exercises primarily target the soleus.
          </li>
          <li>
            Calf muscles act as "anti-gravity" muscles, continuously working
            during standing to prevent the body from falling forward.
          </li>
          <li>
            They play a significant role in absorbing impact forces during
            movement, protecting joints like the ankle and knee.
          </li>
          <li>
            Proper calf strength supports efficient gait mechanics and energy
            transfer during movements.
          </li>
        </ul>

        <p className="text-lg font-medium">
          In summary, strong and functional calf muscles are essential for
          locomotion, balance, injury prevention, and circulatory support,
          impacting both daily activities and athletic performance.
        </p>
      </div>
    </div>
  );
}

export default Calves;
