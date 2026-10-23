import React from "react"
import UserCard from "@/components/UserCard"
import Link from "next/link"

interface User {
  _id: string
  name: string
  email: string
  age: number
  number: number
  city: string
  country: string
}
const UsersPage = async () => {
  const res = await fetch("http://localhost:5000/users")
  const users = await res.json()

  return (
    <div className="container mx-auto">
      <h1 className="py-6 text-center text-2xl font-bold">
        Users data: {users.length}
      </h1>
      <div className="mt-4 grid grid-cols-3 gap-4 p-4">
        {users.map((user: User) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
      <div className="flex justify-center py-6">
        <Link
          href="/add-user"
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Add User
        </Link>
      </div>
    </div>
  )
}

export default UsersPage
