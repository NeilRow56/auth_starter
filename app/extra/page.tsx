import { options } from "@/app/api/auth/[...nextauth]/options"; 
import { getServerSession } from "next-auth/next";
import UserCard from "@/components/UserCard"

const ExtraPage = async () => {
  const session = await getServerSession(options)
  return (
    <>
       {session ? (
        <UserCard user={session?.user}  pagetype={"Extra"}  />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass! Page protected </h1>
      )}
        
    </>
  )
}

export default ExtraPage
