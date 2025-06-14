"use client";
import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";
import { ConfettiExplosion } from "react-confetti-explosion";
import ShinyText from "../Bits/ShinyText";
import Link from "next/link";
import Image from "next/image";

const ContactMe = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("https://formspree.io/f/mzzrywav", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    setIsSubmitting(false);

    if (res.ok) {
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className=" px-8 pt-40 absolute z-10 top-1610 h-[1180px] md:top-1080 flex flex-col justify-between items-center"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
            key={t("Get In Touch")}
            className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {t("Get In Touch")}
            <span className="block h-1.5 w-20 bg-orange-700 mx-auto mt-2"></span>
          </motion.h2>
          <div className="mt-4 text-lg text-gray-400">
            <ShinyText
              text={t(
                "Have a project in mind or just want to say hi? Drop me a message!"
              )}
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </div>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className=" rounded-lg py-20 backdrop-blur-[14px] border-gray-100">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-mono flex items-center justify-center gap-2">
                  <MessageSquare className="h-5 w-5 text-orange-700" />
                  <motion.span
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 2.2,
                      ease: "easeOut",
                    }}
                    key={t("Send a Message")}
                  >
                    {t("Send a Message")}
                  </motion.span>
                </CardTitle>
                {isSubmitted ? (
                  <div></div>
                ) : (
                  <CardDescription className="py-5 text-gray-400">
                    <ShinyText
                      text={t("I&apos;ll get back to you as soon as possible!")}
                      disabled={false}
                      speed={3}
                      className="custom-class"
                    />
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="rounded-lg bg-none backdrop-blur-[20px] py-10 px-10 mt-8 text-center shadow-xl/60 border-[0.5px] border-white flex flex-col gap-4 items-center  relative"
                    >
                      <ConfettiExplosion
                        force={0.6}
                        duration={8000}
                        particleCount={150}
                        width={1600}
                        height={800}
                      />
                      <div className="w-8 h-8 flex justify-center items-center bg-green-900 rounded-full">
                        <Check color="white" size={20} />
                      </div>
                      <motion.h3
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 2.2,
                          ease: "easeOut",
                        }}
                        key={t("Message sent successfully!")}
                        className="text-lg font-medium mb-2 flex items-center gap-2 justify-center"
                      >
                        {t("Message sent successfully!")}
                      </motion.h3>
                      <p className="text-wrap">
                        {t(
                          "Thanks for reaching out. I'll get back to you soon."
                        )}
                      </p>
                      <p>🫶</p>
                    </motion.div>
                  </>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        <motion.span
                          initial={{ opacity: 0, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 2.2,
                            ease: "easeOut",
                          }}
                          key={t("Name")}
                        >
                          {t("Name")}
                        </motion.span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={t("Your name")}
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="outline-none focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        <motion.span
                          initial={{ opacity: 0, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 2.2,
                            ease: "easeOut",
                          }}
                          key={t("Email")}
                        >
                          {t("Email")}
                        </motion.span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t("Your email")}
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-pink-300 focus:ring-pink-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        <motion.span
                          initial={{ opacity: 0, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 2.2,
                            ease: "easeOut",
                          }}
                          key={t("Message")}
                        >
                          {t("Message")}
                        </motion.span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t("Hello! I'd like to talk about...")}
                        rows={5}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-pink-300 focus:ring-pink-300"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full group cursor-pointer transition-all duration-300 bg-white text-black hover:bg-orange-500 hover:text-white opacity-80"
                      disabled={isSubmitting}
                      variant={"ghost"}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="h-4 w-4 animate-spin"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          {t("Sending...")}
                        </span>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 2.2,
                            ease: "easeOut",
                          }}
                          key={t("Send Message")}
                          className="flex items-center justify-center gap-2"
                        >
                          <Image
                            src={"/gmail.png"}
                            alt="gamil"
                            width={2000}
                            height={2000}
                            className="h-4 w-5 transition-transform group-hover:translate-x-0.5"
                          />
                          {t("Send Message")}
                        </motion.span>
                      )}
                    </Button>
                    <div className="w-full flex gap-2 ">
                      <Link
                        href={"https://m.me/battulgabatjargal.batuk"}
                        target="_blank"
                        className="w-1/2 text-center backdrop-blur-[12px] hover:text-cyan-800 transition-all duration-300 rounded-lg p-1.5 flex justify-center items-center gap-2"
                      >
                        <Image
                          src={"/messenger.png"}
                          alt="messenger"
                          width={2000}
                          height={2000}
                          className="h-4 w-4"
                        />
                        <p>{t("Messenger")}</p>
                      </Link>
                      <a
                        href="tel:+97688507838"
                        className="w-1/2 text-center backdrop-blur-[12px] hover:text-green-800 transition-all duration-300 rounded-lg p-1.5 flex justify-center items-center gap-2"
                      >
                        <Image
                          src={"/call.png"}
                          alt="call"
                          width={2000}
                          height={2000}
                          className="h-4 w-4"
                        />
                        <span className="group-hover:hidden">{t("Call")}</span>
                        <span className="hidden group-hover:inline">
                          88507838
                        </span>
                      </a>
                    </div>
                  </form>
                )}
              </CardContent>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ContactMe;
