import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface User {
  _id: string
  name: string
  email: string
  phone: string
  age: number
  city: string
  country: string
}

const DetailsPage = async ({
  params,
}: {
  params: Promise<{ userId: string }>
}) => {
  const { userId } = await params

  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    cache: "no-store",
  })

  if (!res.ok) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-muted/40 p-6">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle>User Not Found</CardTitle>
            <CardDescription>
              Sorry, we could not find this user.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="/users"
              className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Back to Users
            </Link>
          </CardContent>
        </Card>
      </main>
    )
  }

  const user: User = await res.json()

  const details = [
    { label: "Full Name", value: user.name },
    { label: "Email Address", value: user.email },
    { label: "Phone Number", value: user.phone },
    { label: "Age", value: user.age },
    { label: "City", value: user.city },
    { label: "Country", value: user.country },
  ]

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/users"
          className="mb-6 inline-block text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
        >
          ← Back to Users
        </Link>

        <Card className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />

          <CardHeader className="flex flex-col items-center justify-center px-6 pt-10 pb-8 text-center sm:px-10">
            <div className="mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-center text-4xl font-bold text-white shadow-md">
              {user.name.charAt(0).toUpperCase()}
            </div>

            <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase dark:text-blue-400">
              User Profile
            </p>

            <CardTitle className="mt-2 text-3xl font-bold tracking-tight">
              {user.name}
            </CardTitle>

            <CardDescription className="mt-1 text-base">
              {user.email}
            </CardDescription>

            <p className="mt-3 max-w-full rounded-md bg-slate-100 px-3 py-1.5 text-xs break-all text-slate-500 dark:bg-slate-900 dark:text-slate-400">
              ID: {user._id}
            </p>
          </CardHeader>

          <CardContent className="border-t bg-white px-6 py-8 sm:px-10 dark:bg-slate-950">
            <h2 className="mb-6 text-xl font-semibold">Personal Information</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700"
                >
                  <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>

                  <p className="text-base font-semibold break-words">
                    {item.value ?? "Not provided"}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-950 dark:bg-blue-950/30">
              <p className="text-sm font-medium text-blue-900 dark:text-blue-200">
                Profile Overview
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                This page contains the personal information of {user.name}, from{" "}
                {user.city}, {user.country}.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default DetailsPage
