// src/app/(public)/categories/page.tsx
export default function CategoriesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Categories</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {["Math", "Science", "English", "Programming"].map((cat) => (
          <div
            key={cat}
            className="p-6 border dark:border-gray-800 rounded-xl text-center font-medium"
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  )
}
