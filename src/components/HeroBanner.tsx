import { AnimatedText } from "@/components/AnimatedText";
import Image from "next/image";

function HeroBanner() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-10 md:py-20 w-full mt-10 md:mt-16">
      {/* Left Section (Text Content) */}
      <div className="w-full md:w-1/2 h-auto text-center md:text-left space-y-6">
        <div className="mb-12"> {/* Added margin-bottom for spacing */}
          <AnimatedText text="Agilehunt - Guarding your innovations." />
        </div>
        <h4 className="text-sm text-gray-800 leading-relaxed">
          Our proficiency extends across a wide array of technology stacks, enabling us to conduct
          comprehensive support penetration tests. From Angular to Next.js, React to Python, Svelte
          to Flutter, our adept team excels at identifying vulnerabilities and enhancing security
          measures. Count on us to fortify your applications across diverse platforms, ensuring
          robust protection for your digital assets.
        </h4>
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold uppercase py-3 px-6">
          Try Agilehunt For Free
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <Image
          src="/images/vectorHero.svg"
          width={350}
          height={350}
          alt="Hero banner"
          className="max-w-[80%] md:max-w-[90%] lg:max-w-[400px] h-auto"
        />
      </div>
    </div>
  );
}

export default HeroBanner;
