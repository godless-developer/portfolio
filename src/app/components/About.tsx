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
import Image from "next/image";
import ProfileCard from "../Bits/ProfileCard";

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
      mlbb: (
        <div>
          <div className="flex gap-4 mb-3">
            <Image
              src="/about/mlbbLogo.png"
              alt="mlbbLogo"
              width={2000}
              height={2000}
              className="w-[200px] h-[100px] object-fill"
            />
            <div className="bg-white rounded-2xl">
              <Image
                src="/about/csgoLogo.png"
                alt="mlbbLogo"
                width={2000}
                height={2000}
                className="w-[200px] h-[90px] object-fill text-white"
              />
            </div>
            <Image
              src="/about/tetris.png"
              alt="mlbbLogo"
              width={2000}
              height={2000}
              className="w-[200px] h-[100px] object-fill text-white"
            />
            <Image
              src="/about/pubg.png"
              alt="mlbbLogo"
              width={2000}
              height={2000}
              className="w-[200px] h-[100px] object-fill text-white"
            />
          </div>
          <div className="flex justify-around gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <div className="shadow-lg/80 overflow-hidden rounded-lg cursor-pointer hover:scale-105 hover:rotate-2 ease-in-out duration-300">
                  <Image
                    src="/about/proml.jpeg"
                    alt="MLBB"
                    width={2000}
                    height={2000}
                    className="rounded-lg h-[150px] w-[100%] md:h-[205px] md:w-[300px] object-cover"
                  />
                </div>
              </DialogTrigger>
              <DialogTitle></DialogTitle>
              <DialogHeader></DialogHeader>
              <DialogContent className="sm:min-w-[1200px] h-[30%] md:h-[79%] p-0 rounded-lg overflow-hidden">
                <div
                  className="w-[100%] h-[100%]"
                  style={{
                    backgroundImage: "url(/about/proml.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <div className="shadow-lg/80 overflow-hidden rounded-lg cursor-pointer hover:scale-105 hover:rotate-2 ease-in-out duration-300">
                  <Image
                    src="/skinsml.jpeg"
                    alt="MLBB"
                    width={2000}
                    height={2000}
                    className="rounded-lg h-[150px] w-[100%] md:h-[205px] md:w-[300px] object-cover"
                  />
                </div>
              </DialogTrigger>
              <DialogTitle></DialogTitle>
              <DialogHeader></DialogHeader>
              <DialogContent className="sm:min-w-[1200px] h-[30%] md:h-[79%] p-0 rounded-lg overflow-hidden">
                <div
                  className="w-[100%] h-[100%]"
                  style={{
                    backgroundImage: "url(/skinsml.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      ),
      description:
        "Gaming helps me relax and connect with friends. I love immersive story-driven games.",
    },
    {
      icon: <Music className="h-6 w-6" />,
      label: "Music",
      audio: (
        <div className="h-[320px] md:h-[600px] overflow-y-scroll scrollbar-none flex flex-col gap-[8px]">
          <div className="md:flex md:gap-6">
            <iframe
              title="Media player"
              src="https://embed.music.apple.com/us/album/good-credit/1802175271?i=1802175545&&amp;itscg=30200&&amp;itsct=music_box_player&&amp;ls=1&&amp;app=music&&amp;mttnsubad=1802175545&amp;theme=auto"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
              style={{
                border: "0px",
                borderRadius: "8px",
                width: "310px",
                height: "160px",
              }}
            />
            <iframe
              title="Media player"
              src="https://embed.music.apple.com/us/album/roly-poly/1804698377?i=1804698378&&amp;itscg=30200&&amp;itsct=music_box_player&&amp;ls=1&&amp;app=music&&amp;mttnsubad=1804698378&amp;theme=auto"
              id="embedPlayer"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
              style={{
                border: "0px",
                borderRadius: "12px",
                width: "310px",
                height: "160px",
              }}
            />
          </div>
          <div className="md:flex md:gap-6 ">
            <iframe
              title="Media player"
              src="https://embed.music.apple.com/us/album/hot-line/1122635375?i=1122636164&&amp;itscg=30200&&amp;itsct=music_box_player&&amp;ls=1&&amp;app=music&&amp;mttnsubad=1122636164&amp;theme=auto"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
              style={{
                border: "0px",
                borderRadius: "8px",
                width: "310px",
                height: "160px",
              }}
            />
            <iframe
              title="Media player"
              src="https://embed.music.apple.com/us/album/peekaboo-feat-azchike/1781270319?i=1781270545&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1781270545&amp;theme=dark"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
              style={{
                border: "0px",
                borderRadius: "8px",
                width: "310px",
                height: "160px",
              }}
            />
          </div>
          <div className="md:flex md:gap-6 ">
            <iframe
              title="Media player"
              src="https://embed.music.apple.com/us/album/animals/1422651829?i=1422651844&&amp;itscg=30200&&amp;itsct=music_box_player&&amp;ls=1&&amp;app=music&&amp;mttnsubad=1422651844&amp;theme=auto"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
              style={{
                border: "0px",
                borderRadius: "8px",
                width: "310px",
                height: "160px",
              }}
            />
            <iframe
              title="Media player"
              src="https://embed.music.apple.com/us/album/i-got-love-feat/1604435502?i=1604435517&&amp;itscg=30200&&amp;itsct=music_box_player&&amp;ls=1&&amp;app=music&&amp;mttnsubad=1604435517&amp;theme=auto"
              id="embedPlayer"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
              style={{
                border: "0px",
                borderRadius: "12px",
                width: "310px",
                height: "160px",
              }}
            />
          </div>
          <div className="md:flex md:gap-6 ">
            <iframe
              title="Media player"
              src="https://embed.music.apple.com/us/album/%D1%8D%D0%BD%D1%8D-%D0%B1%D0%BE%D0%BB-%D0%B4%D1%83%D1%80%D0%BB%D0%B0%D0%BB-%D0%B1%D0%B8%D1%88/1222984049?i=1222984692&&amp;itscg=30200&&amp;itsct=music_box_player&&amp;ls=1&&amp;app=music&&amp;mttnsubad=1222984692&amp;theme=auto"
              id="embedPlayer"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
              style={{
                border: "0px",
                borderRadius: "12px",
                width: "310px",
                height: "160px",
              }}
            />
            <iframe
              title="Media player"
              src="https://embed.music.apple.com/us/album/%E5%85%AB%E6%96%B9%E6%9D%A5%E8%B4%A2/1763742878?i=1763742879&&amp;itscg=30200&&amp;itsct=music_box_link&&amp;ls=1&app=music&mttnsubad=1763742879&amp;theme=auto"
              id="embedPlayer"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
              style={{
                border: "0px",
                borderRadius: "12px",
                width: "310px",
                height: "160px",
              }}
            />
          </div>
        </div>
      ),
      description:
        "Music keeps me inspired while I code. I enjoy exploring different genres and beats.",
    },
  ];

  return (
    <motion.section
      id="about"
      className="pb-20 pt-60 px-8 z-10 absolute top-160 md:top-190 w-[400px] md:w-[1500px]"
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
          className=" md:block"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ProfileCard
            name="B.Battulga"
            title="Fullstack Developer"
            handle="bt_tulgaagd"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/profile3.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </motion.div>

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
                  <div>
                    <div className=" flex flex-col items-center justify-start text-center gap-2">
                      {interest.audio}
                    </div>
                    {interest.mlbb}
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
