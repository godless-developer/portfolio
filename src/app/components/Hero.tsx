import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className=" flex flex-col gap-10 px-8 w-full h-[400px] justify-center absolute z-10 top-68 md:top-80">
      <div className="z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div>
            <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="text-orange-700">{t("Hello!")}</span>
              <span className="text-white">{t("I&apos;m")}</span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white">Fullstack Dev</span>
                <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-green-300 opacity-50"></span>
              </span>
            </h1>
          </div>
          <div>
            <p className="text-gray-400 text-shadow-2xl">
              {t("hero1word")}
              <br />
              {t("hero2word")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
