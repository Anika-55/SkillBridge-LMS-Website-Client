// src/app/(public)/tutors/page.tsx
export default function TutorsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Browse Tutors</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((tutor) => (
          <div
            key={tutor}
            className="border dark:border-gray-800 p-4 rounded-xl"
          >
            <div className="h-32 bg-gray-200 dark:bg-gray-800 rounded mb-3" />
            <h3 className="font-semibold">Tutor Name</h3>
            <p className="text-sm text-gray-500">Math • Physics</p>
          </div>
        ))}
      </div>
    </div>
  )
}
