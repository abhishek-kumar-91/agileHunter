import { AnimatedText } from "@/components/AnimatedText";
import Footer from "@/components/Footer";
import GettingStarted from "@/components/GettingStarted";
import HeroBanner from "@/components/HeroBanner";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center  items-center bg-[url('/images/gradient-light.png')] bg-no-repeat bg-[length:150%_150%]  bg-center m-h-screen">
       <div className="w-[90%] md:w-[80%] ">
         <HeroBanner />
         <GettingStarted />
         <Services />
         <Testimonials />
         <Contact />
         <Footer />
        
        </div>
    </div>
  );
}
