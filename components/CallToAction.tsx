"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const t = useTranslations("cta");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Email submitted:", email);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  };

  return (
    <div className="mt-14 flex flex-col justify-center items-center">
      <h1 className="text-[40px] leading-[48px] font-inter font-semibold">
        {t("title")}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-7 w-full max-w-[480px] relative"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("emailPlaceholder")}
          className="w-[500px] px-6 py-4 rounded-full bg-greycolor text-gray-800 placeholder-gray-500 focus:outline-none"
          required
        />
        <button
          type="submit"
          disabled={status === "success"}
          className={`absolute w-[160px] -right-3 top-1/2 -translate-y-1/2 px-7 py-2 ${
            status === "success"
              ? "bg-green-500"
              : status === "error"
              ? "bg-red-500"
              : "bg-yellow"
          } text-black font-semibold rounded-full text-xl font-inter ${
            status === "success"
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-105"
          } transition-colors`}
        >
          {t("subscribe")}
        </button>
      </form>
      {status === "success" && (
        <p className="mt-4 text-green-500 text-lg font-inter">{t("success")}</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-500 font-inter text-lg">{t("error")}</p>
      )}
    </div>
  );
};

export default CallToAction;
