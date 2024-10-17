import Link from "next/link"

function Navbar() {
  return (
    <div>
        <header className="w-full f bg-white bg-opacity-30 backdrop-blur-lg fixed ">
  <nav className="flex justify-between py-4 px-10">
    <div className="text-gray-800 text-lg font-bold">AgileHunt</div>
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