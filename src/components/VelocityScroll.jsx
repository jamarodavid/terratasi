import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import "../index.css";

const VelocityScroll = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden whitespace-nowrap">
      <motion.div className="scroller flex text-color-1" style={{ x }}>
        <span className="text-5xl md:text-8xl uppercase font-bold font-poppins italic">
          {`${children}.`}
        </span>
        <span className="text-5xl md:text-8xl uppercase font-bold font-poppins italic">
          {`${children}.`}
        </span>
        <span className="text-5xl md:text-8xl uppercase font-bold font-poppins italic">
          {`${children}.`}
        </span>
        <span className="text-5xl md:text-8xl uppercase font-bold font-poppins italic">
          {`${children}.`}
        </span>
        <span className="text-5xl md:text-8xl uppercase font-bold font-poppins italic">
          {`${children}.`}
        </span>
        <span className="text-5xl md:text-8xl uppercase font-bold font-poppins italic">
          {`${children}.`}
        </span>
      </motion.div>
    </div>
  );
};

export default VelocityScroll;
