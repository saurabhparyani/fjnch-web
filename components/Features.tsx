import React, { forwardRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Features = forwardRef<HTMLDivElement>((props, ref) => {
  const t = useTranslations("features");
  return (
    <div
      ref={ref}
      className="mt-20 flex flex-col justify-center items-center space-y-56 max-w-[1440px] mx-auto px-8"
    >
      {/* Group 1 */}
      <div className="flex flex-row items-center justify-between gap-28">
        <div className="relative">
          <Image
            src="/images/blueellipse.svg"
            alt="Blue background ellipse"
            width={280}
            height={280}
          />
          <Image
            src="/images/phonecase1group.png"
            alt="Phone case"
            width={210}
            height={311}
            quality={100}
            priority
            className="absolute top-0 left-0 z-5 translate-x-7 -translate-y-5 mt-2"
          />
          <Image
            src="/images/coins.svg"
            alt="coins"
            width={140}
            height={100}
            quality={100}
            priority
            className="absolute top-0 left-0 z-5 translate-x-44 translate-y-2"
          />
        </div>
        <div className="flex flex-col space-y-6 max-w-[720px]">
          <h2 className="font-inter font-bold text-5xl">{t("group1.title")}</h2>
          <p className="font-inter text-xl text-[#848484] leading-relaxed">
            {t("group1.description")}
          </p>
        </div>
      </div>

      {/* Group 2 */}
      <div className="flex flex-row items-center justify-between gap-28">
        <div className="relative">
          <Image
            src="/images/yellowellipse.svg"
            alt="Yellow background ellipse"
            width={280}
            height={280}
          />
          <Image
            src="/images/phonegroup2left.png"
            alt="Phone group"
            width={172}
            height={296}
            quality={100}
            priority
            className="absolute top-0 left-0 z-5 -translate-y-14 -translate-x-3"
          />
          <Image
            src="/images/phonegroup2right.png"
            alt="Phone case 2"
            width={500}
            height={500}
            quality={100}
            priority
            className="absolute top-0 left-12 z-5 scale-125 translate-y-10 aspect-square"
          />
        </div>
        <div className="flex flex-col space-y-6 max-w-[720px]">
          <h2 className="font-inter font-bold text-5xl">{t("group2.title")}</h2>
          <p className="font-inter text-xl text-[#848484] leading-relaxed">
            {t("group2.description")}
          </p>
        </div>
      </div>

      {/* Group 3 */}
      <div className="flex flex-row items-center justify-between gap-28">
        <div className="relative">
          <Image
            src="/images/blueellipse.svg"
            alt="Blue background ellipse"
            width={280}
            height={280}
          />
          <div className="w-[600px] h-[450px] absolute left-1/2 -translate-x-[260px] -translate-y-36 top-1/2">
            <Image
              src="/images/phonecase3.png"
              alt="Phone case"
              width={526}
              height={371}
              quality={100}
              priority
              className=" z-5 "
            />
          </div>
          <Image
            src="/images/group3.png"
            alt="group 3"
            width={327}
            height={364}
            quality={100}
            priority
            className="absolute top-0 left-0 z-5 translate-x-2 translate-y-0 scale-125"
          />
        </div>
        <div className="flex flex-col space-y-6 max-w-[720px]">
          <h2 className="font-inter font-bold text-5xl">{t("group3.title")}</h2>
          <p className="font-inter text-xl text-[#848484] leading-relaxed">
            {t("group3.description")}
          </p>
        </div>
      </div>
    </div>
  );
});

Features.displayName = "Features";

export default Features;
