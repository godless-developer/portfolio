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
import Image from "next/image";

const AboutSection = () => {
  const interests = [
    {
      icon: <Stars className="h-6 w-6" />,
      label: "Galaxy",
      soon: "as soon as ...",
      img: "/pfbr.png",
      description:
        "I love building beautiful, fast, and accessible web applications using the latest technologies.",
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      label: "Health",
      soon: "as soon as ...",
      img: "/pfbr.png",
      description:
        "Staying healthy is important for both body and mind. I enjoy learning about fitness and nutrition.",
    },
    {
      icon: <Gamepad className="h-6 w-6" />,
      label: "Gaming",
      soon: "as soon as ...",
      img: "/pfbr.png",
      mlbb: (
        <div>
          <div className="flex justify-around gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <div className="shadow-lg/80 overflow-hidden rounded-lg cursor-pointer hover:scale-105 hover:rotate-2 ease-in-out duration-300">
                  <Image
                    src="/proml.jpeg"
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
                    backgroundImage: "url(/proml.jpeg)",
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
      img: "/pfbr.png",
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

            {/* Embed the random Apple Music player here */}
            <div className="mb-8"></div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {interests.map((interest, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="border-[1px] cursor-pointer border-gray-100 rounded-lg backdrop-blur-[12px] bg-none p-10 ease-in-out duration-300 hover:border-orange-700 hover:scale-105 hover:rotate-3">
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
                  <DialogContent className="bg-transparent backdrop-blur-[10px] rounded-[10px]  max-w-[450px] min-h-[400px] sm:max-w-[725px] sm:min-h-[725px]">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
