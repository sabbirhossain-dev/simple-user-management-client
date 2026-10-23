// import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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

const UserCard = ({ user }: { user: User }) => {
  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent className="-mb-(--card-spacing)">
        <div className="-mx-(--card-spacing) max-h-48 space-y-4 overflow-y-scroll border-t bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed">
          <p>user age: {user.age}</p>
          <p>user number: {user.number}</p>
          <p>user city: {user.city}</p>
          <p>user country: {user.country}</p>
        </div>
      </CardContent>
      {/* <CardFooter className="justify-end gap-2">
        <Button variant="outline">Decline</Button>
        <Button>Accept</Button>
      </CardFooter> */}
      <div className="flex justify-center py-6">
        <Link
          href={`/users/${user._id}`}
          className="inline-block rounded-lg bg-blue-800 px-4 py-2 text-center text-white hover:bg-blue-600"
        >
          view details
        </Link>
      </div>
    </Card>
  )
}

export default UserCard
