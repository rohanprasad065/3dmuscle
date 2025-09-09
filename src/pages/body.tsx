import React from "react";
import neckImg from "../assets/neck.jpeg";
import trapsImg from "../assets/Traps.jpeg";
import deltoidImg from "../assets/Shoulder.jpeg";
import bicepsImg from "../assets/Biceps.jpeg";
import tricepsImg from "../assets/Triceps.jpeg";
import forearmsImg from "../assets/Forearm.jpeg";
import chestImg from "../assets/Chest.jpeg";
import absImg from "../assets/Abdominals.jpeg";
import backImg from "../assets/Back.jpeg";
import glutesImg from "../assets/Glutes.jpg";
import quadsImg from "../assets/Quadriceps.jpeg";
import hamstringsImg from "../assets/Hamstrings.jpeg";
import adductorsImg from "../assets/Adductors.jpeg";
import calvesImg from "../assets/calf.jpeg";

const muscleGroups = [
  {
    title: "Neck",
    image: neckImg,
    description: `The neck muscles enable rotation, flexion, extension, and side bending of the head and cervical spine. 
They include important muscles like the sternocleidomastoid and scalene which assist in breathing by elevating ribs. 
These muscles stabilize the head in posture and help protect arterial and nervous pathways. 
Muscle actions here support swallowing, speech, and movement in daily functions. 
Weakness or injury in neck muscles can affect balance and upper body movement.`,
  },
  {
    title: "Trapezius (Traps)",
    image: trapsImg,
    description: `The trapezius is a large, superficial muscle spanning the upper back and neck. 
It facilitates shrugging, pulling shoulder blades together, and tilting the head back. 
Responsible for elevation, depression, rotation, and retraction of the scapula. 
Vital for stabilizing the shoulders during movement and lifting. 
Acts as a connector between the neck, shoulders, and upper back, supporting posture.`,
  },
  {
    title: "Shoulders (Deltoids)",
    image: deltoidImg,
    description: `The deltoid covers the shoulder joint and gives the shoulder its rounded shape. 
It enables abduction, flexion, and extension of the arm at the shoulder. 
Allows overhead lifting and rotation of the upper arm. 
The muscle has three parts: anterior, lateral, and posterior fibers, which aid in multidirectional shoulder movement. 
Provides stability to the shoulder during active and passive movement.`,
  },
  {
    title: "Biceps",
    image: bicepsImg,
    description: `The biceps brachii is located at the front of the upper arm. 
Main function is flexion of the elbow; helps bend the arm. 
Assists in forearm supination (rotating palm upward). 
Used heavily in lifting, pulling, and carrying objects. 
Functions as an antagonist to the triceps during arm movement.`,
  },
  {
    title: "Triceps",
    image: tricepsImg,
    description: `The triceps brachii is found at the back of the upper arm. 
Main role is extension of the elbow (straightening the arm). 
Crucial in pushing actions, such as shooting or pressing movements. 
Serves as the antagonist to the biceps during arm flexion. 
Stabilizes the elbow joint during motions requiring force.`,
  },
  {
    title: "Forearms",
    image: forearmsImg,
    description: `Forearm muscles control movements of the wrist, fingers, and thumb. 
Facilitate grip strength, twisting actions, and fine motor skills. 
Includes both flexors (bend the wrist and fingers) and extensors (straighten them). 
Connect the hand and upper arm, allowing coordinated upper limb movement. 
Important for activities ranging from typing to lifting heavy objects.`,
  },
  {
    title: "Chest (Pectorals)",
    image: chestImg,
    description: `The pectoralis major is the principal muscle of the chest. 
Allows arm movement such as pushing, punching, and lifting. 
Responsible for adducting and rotating the arms across the body. 
Helps stabilize the shoulder joint during upper limb movement. 
Used in daily activities like opening doors, doing pushups, and lifting objects.`,
  },
  {
    title: "Abdominals (Core)",
    image: absImg,
    description: `The abdominal muscles stabilize the torso and support posture. 
Facilitate bending, twisting, and rotation of the trunk. 
Protect and support internal organs within the abdominal cavity. 
Essential for balance and transferring force between upper and lower body. 
Commonly engaged in activities like sitting, standing, and physical exercise.`,
  },
  {
    title: "Back",
    image: backImg,
    description: `Back muscles include the erector spinae and latissimus dorsi, among others. 
Support extension, flexion, and rotation of the spine and trunk. 
Maintain upright posture and prevent spinal collapse. 
Critical for lifting, pulling, and stabilizing the body during movement. 
Injuries or weaknesses here can lead to postural problems and pain.`,
  },
  {
    title: "Glutes",
    image: glutesImg,
    description: `Gluteal muscles form the buttocks and power lower body movement. 
Enable hip extension, rotation, and abduction, crucial for walking and running. 
Stabilize the pelvis during upright posture and movement. 
Provide force for climbing, jumping, and squatting motions. 
Contribute to pelvic alignment and overall balance.`,
  },
  {
    title: "Quadriceps (Front thigh)",
    image: quadsImg,
    description: `The quadriceps group consists of four muscles at the front of the thigh. 
Main function is knee extension (straightening the leg). 
Assist in walking, running, jumping, and rising from a seated position. 
Stabilize the knee joint, protecting against injury during physical activity. 
Essential for powerful movements in many sports and daily activities.`,
  },
  {
    title: "Hamstrings (Back thigh)",
    image: hamstringsImg,
    description: `The hamstrings are a group of three muscles at the back of the thigh. 
Responsible for knee flexion (bending the leg) and hip extension. 
Support running, jumping, sprinting, and sudden directional changes. 
Balance quadricep action and prevent hyperextension of the knee. 
Injuries often occur due to intense or rapid movement; flexibility is important here.`,
  },
  {
    title: "Adductors (Inner thigh)",
    image: adductorsImg,
    description: `Adductors pull the legs towards the midline, enabling thigh adduction. 
Provide pelvic stability during walking, standing, and athletic activities. 
Assist in balance and side-to-side movement. 
Important for activities requiring coordinated lower limb movement, like dancing or soccer. 
Weakness or tightness can affect hip mobility and gait.`,
  },
  {
    title: "Calves",
    image: calvesImg,
    description: `The calf muscles include the gastrocnemius and soleus at the back of the lower leg. 
Allow plantar flexion (pointing the toes) and support walking, running, and jumping. 
Stabilize the ankle joint, crucial for standing, balancing, and moving. 
Help propel the body forward in locomotion. 
Essential for powerful actions like sprinting or ascending stairs.`,
  }
];

function Body() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Human Muscle Groups
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {muscleGroups.map((muscle, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-200"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              {muscle.title}
            </h2>
            <img
              src={muscle.image}
              alt={muscle.title}
              className="w-full h-auto object-contain rounded-lg mb-4"
            />
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {muscle.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
