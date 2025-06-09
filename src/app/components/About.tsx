"use client";

import { Gamepad, HeartPulse, Music, Stars } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { t } = useTranslation();

  const interests = [
    {
      icon: <Stars className="h-6 w-6" />,
      label: "Galaxy",
      description:
        "I love building beautiful, fast, and accessible web applications using the latest technologies.",
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      label: "Health",
      description:
        "Staying healthy is important for both body and mind. I enjoy learning about fitness and nutrition.",
    },
    {
      icon: <Gamepad className="h-6 w-6" />,
      label: "Gaming",
      description:
        "Gaming helps me relax and connect with friends. I love immersive story-driven games.",
    },
    {
      icon: <Music className="h-6 w-6" />,
      label: "Music",
      description:
        "Music keeps me inspired while I code. I enjoy exploring different genres and beats.",
    },
  ];

  return (
    <motion.section
      id="about"
      className="pb-20 pt-60 px-8 z-10 absolute top-160 md:top-190 w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="mx-auto max-w-3xl text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            key={t("About Me")}
          >
            {t("About Me")}
          </motion.span>
          <span className="block h-1.5 w-20 bg-orange-700 mx-auto mt-2"></span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold font-mono"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              key={t("Im")}
            >
              {t("Im")}{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-orange-700"
              key={t("Battulga")}
            >
              {t("Battulga")}
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              key={t("gdg")}
            >
              {t("gdg")}
            </motion.span>
          </motion.h3>

          <motion.p
            className="text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            key={t("me1")}
          >
            {t("me1")}
          </motion.p>

          <motion.p
            className="text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            key={t("me2")}
          >
            {t("me2")}
          </motion.p>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            viewport={{ once: true }}
          >
            {interests.map((interest, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <motion.div
                    className="border-[1px] cursor-pointer border-gray-100 rounded-lg backdrop-blur-[12px] bg-none p-10 ease-in-out duration-300 hover:border-orange-700 hover:scale-105 hover:rotate-3"
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    initial={{ opacity: 0, translateY: 40 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                  >
                    <CardContent className="flex flex-col items-center justify-center p-4">
                      <div className="mb-2 text-orange-700">
                        {interest.icon}
                      </div>
                      <span className="text-sm font-medium text-white">
                        {interest.label}
                      </span>
                    </CardContent>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="bg-transparent backdrop-blur-[10px] rounded-[10px] max-w-[450px] min-h-[400px] sm:max-w-[725px] sm:min-h-[725px]">
                  <DialogHeader className="w-full p-7 h-full">
                    <DialogTitle className="flex justify-start gap-2 items-center">
                      <span className="text-[24px] font-medium text-white">
                        {interest.label}
                      </span>
                      <div className="text-orange-700 mt-1">
                        {interest.icon}
                      </div>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="text-white text-center px-4">
                    {interest.description}
                  </div>
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
