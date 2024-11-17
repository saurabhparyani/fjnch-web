"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("header");
  const pathname = usePathname();

  const languages = [
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
    { code: "fr", label: "Français" },
    { code: "it", label: "Italiano" },
  ];

  return (
    <header className="md:sticky md:top-0 z-10 min-h-[130px] bg-white">
      <nav className="flex justify-between items-center mx-12 py-7">
        <Link href="/">
          <div className="flex flex-row items-center space-x-2">
            <div className="font-nico text-4xl">Fjnch</div>
            <Image
              src="/images/fjnch_logo.svg"
              alt="Fjnch"
              width={29}
              height={33}
              priority
            />
          </div>
        </Link>
        <div className="flex flex-row items-center space-x-14">
          <div className="gap-1">
            <div className="font-medium text-xl font-inter">
              {t("keyFeatures")}
            </div>
            <div className="border-b-[3px] border-yellow" />
          </div>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-row items-center space-x-[5px] cursor-pointer"
            >
              <Image
                src="/images/globe_svg.svg"
                alt="Globe"
                width={29}
                height={29}
                priority
              />
              <div className="font-inter text-xl">{t("currentLanguage")}</div>
              <div className="pl-2">
                <Image
                  src="/images/bottom_arrow.png"
                  alt="Arrow Down"
                  width={24}
                  height={24}
                />
              </div>
            </button>

            {isOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
                {languages.map((lang, index) => (
                  <div key={lang.code}>
                    <Link
                      href={pathname}
                      locale={lang.code}
                      className="block px-4 py-2 hover:bg-zinc-200 font-inter"
                      onClick={() => setIsOpen(false)}
                    >
                      {lang.label}
                    </Link>
                    {index < languages.length - 1 && (
                      <div className="border-b border-y-zinc-300" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
