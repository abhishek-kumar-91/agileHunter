import AuthComponent from "@/components/AuthComponent";

function page() {
  return (
    <div className="bg-[url('/images/gradient-light.png')] bg-no-repeat bg-[length:150%_150%]  bg-center h-screen">
     <AuthComponent urlLink="/signup" urlText="Register Here" emailBtn="Continue with Email" googleBtn="Sign in with Google" />
    </div>
  )
}

export default page