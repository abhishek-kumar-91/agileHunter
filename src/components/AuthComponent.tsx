import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

interface AuthComponentProps {
  urlLink: string;
  urlText: string;
  emailBtn: string;
  googleBtn: string;
}

function AuthComponent({urlLink, urlText, emailBtn, googleBtn}: AuthComponentProps) {
  return (
    <div className="w-full h-full flex justify-center items-center pt-10  2xl:pb-36">
        <div className="w-[360px] h-[397px] bg-[#ffffffcc] flex flex-col gap-3  rounded-3xl border border-gray-200 p-6">
          <div className="w-full flex flex-col gap-5 pb-3  border-b-2 border-gray-100">
           <div className=" flex items-center justify-between">
           <div className="  w-16 h-16 bg-[#F4F3F3] rounded-full flex justify-center items-center">
              <Image
                src="/images/doubleImg.svg"
                alt="signin image logo"
                width={32}
                height={32}
              />

              <Image
                src="/images/leftArrow.svg"
                alt="signin image logo"
                width={14}
                height={12}
                className="absolute"
              />

              
            </div>

            <Link href={urlLink} className="text-sm text-blue-500 hover:underline"> {urlText}
            </Link>
           </div>

           <div className="w-full">
           <h1 className="text-xl font-bold text-gray-600">Welcome to AgileHunt</h1>
           <h4 className="text-gray-400">Please sign in or sign up below.</h4>
           </div>

           <div className="w-full flex flex-col gap-3">
            <label htmlFor="email"  className="text-gray-600">Email</label>
            <input type="text" name="email" placeholder="you@gmail.com"
            className="w-full h-10 p-4 text-sm rounded-lg border border-gray-200" />
            <button className="w-full py-2 hover:opacity-70 duration-300 bg-black text-white rounded-lg font-semibold">{emailBtn}</button>
           </div>
          </div>

          <button className="w-full py-2 flex justify-center items-center gap-2
           bg-gray-100 text-gray-600 rounded-lg font-semibold duration-300 hover:bg-gray-500 hover:text-white"><FaGoogle />{googleBtn}</button>
        </div>
      </div>
  )
}

export default AuthComponent