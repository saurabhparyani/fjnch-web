import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <main className="flex flex-col items-center justify-center relative w-full max-w-[1440px] mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-inter font-bold text-[55px] text-center">
          {t("title")}
        </h1>
        <p className="font-inter text-xl mt-5">Goodbye financial chaos!</p>
        <p className="font-inter text-xl">{t("description")}</p>
      </div>

      <div className="relative w-full flex justify-center items-center">
        {/* Phone in the center */}
        <div className="relative z-5">
          <Image
            src="/images/phonesvg.svg"
            alt="Hero"
            width={240}
            height={450}
            quality={100}
            priority
          />
        </div>

        {/* Hero Group 1 - Left */}
        <div className="absolute left-[22%] top-0 transform translate-y-5">
          <Image
            src="/images/hero_group1.svg"
            alt="Hero"
            width={237}
            height={46}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-inter text-xl leading-6 w-full text-center">
            {t("features.finance")}
          </div>
        </div>

        {/* Hero Group 2 - Right */}
        <div className="absolute right-[20%] top-0 translate-y-28">
          <Image
            src="/images/hero_group2.svg"
            alt="Hero"
            width={265}
            height={46}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-inter text-xl leading-6 w-full text-center">
            {t("features.analytics")}
          </div>
        </div>

        {/* Hero Group 3 - Bottom Right */}
        <div className="absolute right-[28%] bottom-0 transform -translate-y-12">
          <Image
            src="/images/hero_group3.svg"
            alt="Hero"
            width={168}
            height={46}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-inter text-xl leading-6 w-full text-center">
            {t("features.trial")}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
