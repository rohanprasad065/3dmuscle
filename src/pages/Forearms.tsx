import React from "react";
import forearm1 from "../assets/Forearm.jpeg";
import forearm2 from "../assets/forarm.jpg";

function Forearms() {
  return (
    <div className="flex h-screen">
      {/* Left Section - Images */}
      <div className="w-1/2 flex flex-col items-center justify-center gap-6 bg-gray-100 p-6 overflow-y-auto">
        <img
          src={forearm1}
          alt="Forearm Anatomy"
          className="max-h-[45%] rounded-2xl shadow-lg object-contain"
        />
        <img
          src={forearm2}
          alt="Forearm Muscles"
          className="max-h-[45%] rounded-2xl shadow-lg object-contain"
        />
      </div>

      {/* Right Section - Information */}
      <div className="w-1/2 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Forearm Muscles</h1>
        <p className="text-lg leading-relaxed mb-6">
          The forearm is a highly complex and functional part of the upper limb
          that contains about 20 muscles divided into two main compartments: the
          anterior (flexor) compartment and the posterior (extensor)
          compartment. These muscles enable movements of the wrist, hand, and
          fingers, along with pronation and supination of the forearm, making
          them essential for everyday tasks and fine motor control.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Forearm Muscle Groups and Anatomy
        </h2>
        <h3 className="text-xl font-medium mt-4 mb-2">
          Anterior (Flexor) Compartment
        </h3>
        <p className="mb-4">
          Contains muscles primarily responsible for flexion of the wrist and
          fingers and pronation of the forearm. Divided into superficial,
          intermediate, and deep layers. Key superficial muscles: Pronator
          teres, flexor carpi radialis, palmaris longus, flexor carpi ulnaris,
          flexor digitorum superficialis.
        </p>

        <h3 className="text-xl font-medium mt-4 mb-2">
          Posterior (Extensor) Compartment
        </h3>
        <p className="mb-4">
          Contains muscles mainly responsible for extension of the wrist and
          fingers and supination of the forearm. Divided into superficial and
          deep layers. Key muscles: Brachioradialis, extensor carpi radialis
          longus and brevis, extensor carpi ulnaris, extensor digitorum,
          supinator.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Important Forearm Muscles
        </h2>
        <p className="mb-4">
          <strong>Anterior Compartment:</strong> Pronator teres, flexor carpi
          radialis, flexor digitorum superficialis, flexor pollicis longus,
          pronator quadratus → Wrist and finger flexion, forearm pronation.
          <br />
          <strong>Posterior Compartment:</strong> Brachioradialis, extensor
          carpi radialis longus, extensor digitorum, supinator → Wrist and
          finger extension, forearm supination.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Nerve Innervation</h2>
        <p className="mb-4">
          Median nerve mainly innervates flexor muscles (except flexor carpi
          ulnaris and part of flexor digitorum profundus supplied by the ulnar
          nerve). Radial nerve innervates the extensor muscles and some forearm
          flexors like brachioradialis.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Why Forearm Training Is Important
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>
            <strong>Grip Strength and Dexterity:</strong> Controls fine motor
            skills and grip strength for tasks from writing to lifting.
          </li>
          <li>
            <strong>Wrist and Hand Stability:</strong> Reduces wrist injuries in
            pushing, pulling, and lifting.
          </li>
          <li>
            <strong>Injury Prevention:</strong> Prevents tennis elbow, carpal
            tunnel, and overuse strains.
          </li>
          <li>
            <strong>Athletic Performance:</strong> Vital in climbing, tennis,
            golf, baseball.
          </li>
          <li>
            <strong>Functional Movements:</strong> Enables pronation/supination
            for daily and athletic activities.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          How to Train the Forearm Muscles
        </h2>
        <p className="mb-4">
          <strong>Wrist Flexors:</strong> Wrist curls, reverse wrist curls,
          farmer’s carries → Use light/moderate weights. <br />
          <strong>Finger Flexors:</strong> Grip trainers, stress balls, towel
          wringing → High reps for endurance. <br />
          <strong>Wrist Extensors:</strong> Reverse curls, extension curls →
          Start light to avoid strain. <br />
          <strong>Supination:</strong> Dumbbell supination/pronation exercises →
          Slow controlled reps. <br />
          <strong>Pronation:</strong> Pronator curls, cable pronation → Balance
          with supination work. <br />
          <strong>Overall Forearm:</strong> Dead hangs, pull-ups, climbing →
          Bodyweight endurance and grip strength.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Consequences of Not Training Forearms
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2">
          <li>Weak grip and poor lifting ability.</li>
          <li>Reduced fine motor skills (writing, typing).</li>
          <li>Higher risk of strains, tendinitis, carpal tunnel.</li>
          <li>Poor performance in sports requiring wrist/hand strength.</li>
          <li>Difficulty in daily tasks needing wrist/hand coordination.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Additional Forearm Facts
        </h2>
        <p className="mb-4">
          Forearms work with biceps/triceps for complex movements. Balanced
          training prevents imbalances and injuries. Progressive controlled
          training improves strength, endurance, and joint health.
        </p>

        <p className="font-semibold">
          In conclusion, forearm muscles are vital for grip strength, wrist
          stability, hand dexterity, and injury prevention, playing essential
          roles in both daily living and athletic performance.
        </p>
      </div>
    </div>
  );
}

export default Forearms;
