import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex flex-col gap-10 px-8 w-full h-[400px] justify-center absolute z-10 top-68 md:top-80"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
        >
          <div>
            <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-6xl">
              <motion.span
                className="text-orange-700 inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                key={t("Hello!")}
              >
                {t("Hello!")}
              </motion.span>{" "}
              <motion.span
                className="text-white inline-block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                key={t("I&apos;m")}
              >
                {t("I&apos;m")}
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                key={t("FullstackDev")}
              >
                {t("FullstackDev")}
              </motion.span>
            </h1>
          </div>
          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            key={t("hero1word")}
          >
            <p className="text-gray-400 text-shadow-2xl">
              {t("hero1word")}
              <br />
              {t("hero2word")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
