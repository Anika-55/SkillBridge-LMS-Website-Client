// src/app/(public)/page.tsx
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="space-y-24 pb-24">
      {/* ================= HERO ================= */}
      <section className="text-center px-6 pt-20">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block text-sm font-medium bg-gray-100 dark:bg-gray-800 px-4 py-1.5 rounded-full">
            Trusted by students worldwide
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Learn from <span className="text-indigo-600">Expert Tutors</span> Anytime
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Book personalized 1-on-1 sessions with verified tutors across multiple
            subjects and boost your learning with flexible scheduling.
          </p>

          <div className="flex justify-center gap-4 pt-4 flex-wrap">
            <Link
              href="/tutors"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium shadow-md transition"
            >
              Find Tutors
            </Link>

            <Link
              href="/register"
              className="border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition"
            >
              Join as Student
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl font-bold mb-4">Why Learn With Us?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We make online learning simple, secure, and effective so you can focus
            on achieving your goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Verified Tutors",
              desc: "All tutors go through a strict verification process to ensure top quality teaching.",
            },
            {
              title: "Flexible Booking",
              desc: "Schedule lessons at your convenience with easy rescheduling options.",
            },
            {
              title: "Secure Payments",
              desc: "Your transactions are encrypted and protected with trusted payment systems.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/40 backdrop-blur hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto bg-indigo-600 text-white rounded-3xl p-10 md:p-16 text-center space-y-6 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Learning?
          </h2>
          <p className="text-indigo-100 max-w-xl mx-auto">
            Join thousands of students already improving their skills with expert
            guidance.
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Create Free Account
          </Link>
        </div>
      </section>
    </main>
  )
}
