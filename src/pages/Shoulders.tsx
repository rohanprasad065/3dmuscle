import React from "react";
import ShoulderImg from "../assets/Shoulder.jpeg";

export default function Shoulders(): JSX.Element {
  return (
    <main className="min-h-screen bg-gray-50 text-slate-900 p-6">
      <div className="mx-auto max-w-6xl rounded-2xl overflow-hidden shadow-2xl bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Image */}
          <div className="relative h-72 sm:h-96 lg:h-[80vh] p-6">
            <div className="absolute inset-4 rounded-xl overflow-hidden shadow-inner">
              <img
                src={ShoulderImg}
                alt="Shoulder anatomy"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                loading="eager"
              />
            </div>
          </div>

          {/* Right: Content Card */}
          <section className="p-8 sm:p-12 lg:p-16">
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">Main Shoulder Muscles and Anatomy</h1>
              <p className="text-sm text-slate-600 mb-6">The shoulder muscles are divided into several key groups: <span className="font-medium">Deltoid</span>, <span className="font-medium">Rotator Cuff</span> (Supraspinatus, Infraspinatus, Teres Minor, Subscapularis), <span className="font-medium">Teres Major</span>, and other stabilizers (Trapezius, Rhomboids, Serratus Anterior, Levator Scapulae). Each has unique origins, insertions, and functions essential for healthy and strong shoulders.</p>

              <div className="space-y-6">
                <article className="rounded-lg p-4 bg-gray-50 border border-gray-100 shadow-sm">
                  <h2 className="font-semibold">Deltoid</h2>
                  <p className="text-sm text-slate-600 mt-2"><strong>Structure:</strong> Three heads — anterior, lateral, posterior.</p>
                  <p className="text-sm text-slate-600"><strong>Function:</strong> Abduction, flexion, extension, rotation.</p>
                  <p className="text-sm text-slate-600"><strong>Training:</strong> Overhead press, Arnold press, lateral/front/reverse raises.</p>
                </article>

                <article className="rounded-lg p-4 bg-gray-50 border border-gray-100 shadow-sm">
                  <h2 className="font-semibold">Rotator Cuff</h2>
                  <ul className="mt-2 text-sm text-slate-600 space-y-1">
                    <li><strong>Supraspinatus:</strong> Initiates abduction. — <em>Band abductions, prone raises</em></li>
                    <li><strong>Infraspinatus:</strong> External rotation. — <em>Band/DB external rotations</em></li>
                    <li><strong>Teres Minor:</strong> External rotation/adduction. — <em>Rear-delt work, band rotations</em></li>
                    <li><strong>Subscapularis:</strong> Internal rotation. — <em>Band internal rotations, floor presses</em></li>
                  </ul>
                </article>

                <article className="rounded-lg p-4 bg-gray-50 border border-gray-100 shadow-sm">
                  <h2 className="font-semibold">Teres Major & Stabilizers</h2>
                  <p className="text-sm text-slate-600 mt-2"><strong>Teres Major:</strong> Adduction & medial rotation — <em>Pull downs, rows</em>.</p>
                  <p className="text-sm text-slate-600 mt-1"><strong>Stabilizers:</strong> Trapezius, Rhomboids, Serratus Anterior, Levator Scapulae — <em>Shrugs, rows, face pulls, push-up plus</em>.</p>
                </article>

                <article className="rounded-lg p-4 bg-white border border-gray-100 shadow-sm">
                  <h2 className="font-semibold">Why It Matters</h2>
                  <ul className="mt-2 text-sm text-slate-600 list-disc pl-5 space-y-1">
                    <li><strong>Stability & injury prevention</strong> — strong rotator cuff reduces risk of tears and impingement.</li>
                    <li><strong>Functionality</strong> — enables lifting, reaching, pushing, pulling.</li>
                    <li><strong>Posture</strong> — balances the scapula and prevents rounded shoulders.</li>
                    <li><strong>Performance & aesthetics</strong> — key for athletes and a defined upper body.</li>
                  </ul>
                </article>

                <div className="rounded-lg p-4 bg-gray-50 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold mb-2">Training Tips</h3>
                  <p className="text-sm text-slate-600">Include pressing and raising movements for deltoids, dedicated band/cable work for rotator cuff, and rowing/shrugging for stabilizers. Train 2–3× weekly — light loads for cuff work, heavier for delts, always prioritize technique.</p>
                </div>

                <div className="overflow-x-auto rounded-lg border border-gray-100 bg-white shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3">Muscle Group</th>
                        <th className="px-4 py-3">Main Muscles</th>
                        <th className="px-4 py-3">Function</th>
                        <th className="px-4 py-3">Key Exercises</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-3">Deltoid</td>
                        <td className="px-4 py-3">Anterior, Lateral, Posterior</td>
                        <td className="px-4 py-3">Abduction, Flexion, Extension, Rotation</td>
                        <td className="px-4 py-3">Presses, Raises, Reverse Fly</td>
                      </tr>
                      <tr className="border-t bg-gray-50">
                        <td className="px-4 py-3">Rotator Cuff</td>
                        <td className="px-4 py-3">Supraspinatus, Infraspinatus, Teres Minor, Subscapularis</td>
                        <td className="px-4 py-3">Stabilization, Rotation</td>
                        <td className="px-4 py-3">Internal/External Rotations, Band Work</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3">Teres Major</td>
                        <td className="px-4 py-3">Teres Major</td>
                        <td className="px-4 py-3">Adduction, Medial Rotation</td>
                        <td className="px-4 py-3">Pulldowns, Rows</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
