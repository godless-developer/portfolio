import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { CardContent } from "@/components/ui/card";

const SkillCard = ({
  skill,
}: {
  skill: { name: string; icon: JSX.Element; color: string; percentage: number; hover: string , bg:string , bgColor:string };
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="perspective" onClick={() => setFlipped(!flipped)}>
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >

        <div className={`absolute w-full h-full md:h-[150px] md:w-full backface-hidden border border-gray-100 p-4 rounded-lg backdrop-blur-[12px] ${skill.hover} duration-300 hover:scale-105 transition-all cursor-pointer `}>
          <CardContent className="p-6">
            <div className="flex flex-col gap-3 text-nowrap items-center text-center md:-mt-2.5">
              <div className={`p-3 rounded-full ${skill.color} ${skill.bg}`}>
                {skill.icon}
              </div>
              <h4 className="font-medium ">{skill.name}</h4>
            </div>
          </CardContent>
        </div>

        <div
          className={`bg-none backdrop-blur-[12px]  absolute w-full h-[185px] md:h-[150px] md:w-full backface-hidden overflow-hidden rotate-y-180 border ${skill.hover} duration-300 hover:scale-105 transition-all border-gray-100 rounded-lg  text-white   cursor-pointer`}
        >
          <div className="p-4 pr-2 flex flex-col items-center text-center justify-center w-full h-full backdrop-blur-[2px] rounded-lg">
            <h4 className="text-[15px] font-semibold ">{skill.name}</h4>
            <p className=" mb-2">{skill.percentage}%</p>
            <div className="w-3/4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${skill.bgColor} `}
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillCard;
