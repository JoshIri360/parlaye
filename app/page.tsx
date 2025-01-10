import HeroHeader from "@/components/HeroHeader";
import Step from "@/components/Step";
import { Gamepad2 } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-28 gap-20 mt-20">
        <div className="w-full bg-black bg-dot-white/[0.2]  relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <HeroHeader
            title="Built by Users for Users"
            subtitle="Start playing against your friends today or get matched with opponents in peer-to-peer contests."
            icon={Gamepad2}
          />
        </div>
        <img
          src="/images/product-image.png"
          className="w-[15.45rem] sm:w-[20.6rem] md:w-[25.75rem] h-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center mb-28 gap-20 w-full">
        <HeroHeader
          roundedText="PLAY. COMPETE. WIN."
          title="HOW IT WORKS"
          subtitle="We bring players together in exciting peer-to-peer contests, making every match unforgettable."
          variant="secondary"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 sm:gap-6 lg:gap-8 items-stretch">
          <Step
            stepNumber={1}
            heading="Find Players"
            subheading="Pick at least 2 of your favorite player props. Simply pick over & under. Mix and match multiple sports."
            image="/images/step-1.png"
          />
          <Step
            stepNumber={2}
            heading="Get Matched"
            subheading="As the first curated daily fantasy sports app, we handpick your opponents to maximize entertainment."
            image="/images/step-2.png"
          />
          <Step
            stepNumber={3}
            heading="Track Parlays"
            subheading="Say goodbye to perfection in parlays. Just because you miss a pick, doesn't mean you can't beat your opponent."
            image="/images/step-3.png"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-28 gap-20">
        <HeroHeader
          roundedText="STAY CONNECTED"
          title="OUR SOCIALS"
          subtitle="Follow us for updates, tips, and exclusive challenges. Be part of the Parlay community!"
          variant="secondary"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-12 md:gap-16 w-full max-w-4xl px-4">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center transform hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/images/socials/icon-discord.png"
              alt="Discord"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center transform hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/images/socials/icon-instagram.png"
              alt="Instagram"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center transform hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/images/socials/icon-linkedIn.png"
              alt="LinkedIn"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center transform hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/images/socials/icon-tiktok.png"
              alt="TikTok"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center transform hover:scale-110 transition-transform duration-200"
          >
            <img
              src="/images/socials/icon-x.png"
              alt="X"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-28 gap-20">
        <HeroHeader
          title="DOWNLOAD THE APP"
          subtitle="Join the action! Available now on iOS and Android."
          variant="image"
          image="/images/download-image.png"
        />
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 md:gap-8">
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center border-4 border-white rounded-xl overflow-hidden"
          >
            <img
              src="/images/download-appstore.png"
              alt="TikTok"
              className="h-16"
            />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center border-4 border-white rounded-xl overflow-hidden"
          >
            <img
              src="/images/download-playstore.png"
              alt="X"
              className="h-16"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
