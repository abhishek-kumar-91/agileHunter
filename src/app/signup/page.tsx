import AuthComponent from "@/components/AuthComponent";

function page() {
  return (
    <div className="bg-[url('/images/gradient-light.png')] px-5 bg-no-repeat bg-[length:150%_150%]  bg-center h-screen">
     <AuthComponent urlLink="/signin" urlText="Login Here" emailBtn="Register with Email" googleBtn="Sign up with Google" />
    </div>
  )
}

export default page