import { signIn, auth, providerMap } from "@/auth"
import { redirect } from "next/navigation";
import Home from "./Home";


const Dashboard = async () => {
  const session = await auth();
  const user =  session?.user;

  if (!user) {
    redirect("/sign-in")
  } 

  return (
    <Home/> 
  )
}

export default Dashboard