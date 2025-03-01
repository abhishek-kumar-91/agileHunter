import Link from "next/link"
import Image from "next/image"
function Navbar() {
  return (
    <div>
  <header className="md:w-[80%] w-[70%] md:mx-[10%] mx-[15%] md:mt-4 mt-6 rounded-xl bg-white/30 shadow-lg  border-4 border-white backdrop-blur-lg fixed ">
  <nav className="flex justify-between py-4 px-10">
    <div className="flex text-gray-800 text-lg font-bold">
     <Image src='/images/navlogo.png' alt="agilehunt" width={28} height={28} />
</div>
    <ul className="flex space-x-4">
    <Link href={"/"} className="text-gray-800 hover:text-gray-600 cursor-pointer">Home</Link>
      <Link href={"/signin"} className="text-gray-800 hover:text-gray-600 cursor-pointer">Sign In</Link>
      
    </ul>
  </nav>
</header>
    </div>
  )
}

export default Navbar