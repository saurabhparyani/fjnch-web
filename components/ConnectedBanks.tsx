import React from "react";
import { useTranslations } from "next-intl";

const ConnectedBanks = () => {
  const t = useTranslations("banks");
  return (
    <div className="mt-24 w-full bg-[#F7F7F7] h-[220px]">
      <div className="flex flex-col justify-center items-center space-y-9 pt-9">
        <h1 className="text-slatecolor font-inter font-bold text-3xl">
          {t("title")}
        </h1>
        <div>logos</div>
        <p className="text-slatecolor font-inter font-semibold text-xl">
          {t("footer")}
        </p>
      </div>
    </div>
  );
};

export default ConnectedBanks;
