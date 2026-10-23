"use client"

import { redirect } from "next/navigation"

const AddUserPage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    console.log("submitted", data)

    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      throw new Error("Failed to add user")
    }

    redirect("/users")
  }
  return (
    <div className="mx-auto mt-10 max-w-lg rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
        User Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+8801712345683"
            required
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            min="1"
            required
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            required
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            name="country"
            placeholder="Enter your country"
            required
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddUserPage
