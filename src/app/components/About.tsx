import { Code, Gamepad, HeartPulse, Music } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const AboutSection = () => {
  const interests = [
    { icon: <Code className="h-6 w-6" />, label: "Coding" },
    { icon: <HeartPulse className="h-6 w-6" />, label: "Health" },
    { icon: <Gamepad className="h-6 w-6" />, label: "Gaming" },
    { icon: <Music className="h-6 w-6" />, label: "Music" },
  ];

  return (
    <section
      id="about"
      className="pb-20 pt-60 px-8 z-10 absolute top-160 md:top-190"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
            <span className="block h-1.5 w-20 bg-orange-700 mx-auto mt-2"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div></div>
          <div>
            <h3 className="text-2xl font-bold mb-4 font-mono">
              Hey there! I&apos;m{" "}
              <span className="text-orange-700">Battulga</span>
            </h3>
            <p className="text-white mb-6">
              A passionate fullstack developer who loves creating beautiful and
              functional web applications. With a background in both frontend
              and backend technologies, I enjoy bringing ideas to life through
              clean code and intuitive user experiences.
            </p>
            <p className="text-white mb-8">
              When I&apos;m not coding, you can find me exploring new tech,
              playing video games, or enjoying a good cup of coffee. I believe
              in continuous learning and pushing the boundaries of what&apos;s
              possible on the web.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {interests.map((interest, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="border-[0.5px] cursor-pointer border-gray-100 rounded-lg backdrop-blur-[12px] bg-none p-10 hover:border-pink-300 ">
                      <CardContent className="flex flex-col items-center justify-center p-4">
                        <div className="mb-2 text-orange-700">
                          {interest.icon}
                        </div>
                        <span className="text-sm font-medium">
                          {interest.label}
                        </span>
                      </CardContent>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-[url('/hero.jpeg')] bg-cover bg-center rounded-[10px]  max-w-[450px] min-h-[500px] sm:max-w-[725px] sm:min-h-[725px]">
                    <DialogHeader className="w-full p-12 h-full">
                      <DialogTitle className="flex justify-start gap-2 items-center">
                        <span className="text-[24px] font-medium text-white">
                          {interest.label}
                        </span>
                        <div className="text-orange-700 mt-1">
                          {interest.icon}
                        </div>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4"></div>
                    <DialogFooter></DialogFooter>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
