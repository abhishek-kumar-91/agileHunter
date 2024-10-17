
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center  items-center bg-[url('/images/gradient-light.png')] bg-no-repeat bg-[length:150%_150%]  bg-center h-screen">
       <img
      src="/images/spinner.svg" // Adjust the path if necessary
      alt="Animated SVG"
      className="w-full h-40" // Adjust size as needed
    />
    <h1>Your application is building. Please wait...</h1>
    <h1>Check only signin and signup page</h1>
    </div>
  );
}
