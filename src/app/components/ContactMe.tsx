"use client";
import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, MessageSquare, Send } from "lucide-react";
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
      className=" px-8 pt-40 absolute z-10 top-1522 h-[1100px] md:top-1080 flex flex-col justify-between items-center"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get In Touch
            <span className="block h-1.5 w-20 bg-orange-700 mx-auto mt-2"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Have a project in mind or just want to say hi? Drop me a message!
          </p>
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
                  {t("Send a Message")}
                </CardTitle>
                {isSubmitted ? (
                  <div></div>
                ) : (
                  <CardDescription className="py-5 text-gray-400">
                    I&apos;ll get back to you as soon as possible!
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <>
                    {/* <ConfettiExplosion
                      force={0.6}
                      duration={8000}
                      particleCount={150}
                      width={1600}
                      height={800}
                    /> */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="rounded-lg bg-none backdrop-blur-[20px] py-10 px-10 mt-8 text-center shadow-xl/60 border-[2px] border-white flex flex-col gap-4 items-center text-shadow-lg/80 relative"
                    >
                      <div className="w-8 h-8 flex justify-center items-center bg-green-900 rounded-full">
                        <Check color="white" />
                      </div>
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2 justify-center">
                        {t("Message sent successfully!")}
                      </h3>
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
                      <Label htmlFor="name">{t("Name")}</Label>
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
                      <Label htmlFor="email">{t("Email")}</Label>
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
                      <Label htmlFor="message">{t("Message")}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Hello! I'd like to talk about..."
                        rows={5}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-pink-300 focus:ring-pink-300"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full group cursor-pointer"
                      disabled={isSubmitting}
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
                        <span className="flex items-center justify-center gap-2">
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          {t("Send Message")}
                        </span>
                      )}
                    </Button>
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
