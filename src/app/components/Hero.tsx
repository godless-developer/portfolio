import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className=" flex flex-col gap-10 px-8 w-full h-[400px] justify-center absolute z-10 top-68 md:top-80">
      <div className="z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="text-orange-700">Hello!</span>
              <span className="text-white">I&apos;m a</span>

              <span className="relative inline-block">
                <span className="relative z-10 text-white">Fullstack Dev</span>
                <span className="absolute bottom-2 left-0 z-0 h-3 w-full bg-green-300 opacity-50"></span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-400 text-shadow-2xl">
              I build cool stuff for the web with modern technologies.
              <br />
              Let&apos;s create something awesome together!
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* <Button size="lg" className="group">
              View my work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button> */}
          </motion.div>
        </div>
      </div>

      <div className=" bottom-5 left-1/2 -translate-x-1/2">
        <Sparkles className="h-6 w-6 text-pink-500 animate-pulse" />
      </div>
    </div>
  );
}
