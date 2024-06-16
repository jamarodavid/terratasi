import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function App() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [currentValue, setCurrentValue] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya berjalan sekali saat masuk ke viewport
    threshold: 0.5, // 50% elemen terlihat di viewport untuk memicu animasi
  });

  useEffect(() => {
    if (inView) {
      const animation = animate(count, 28151905, { duration: 2.5 });
      return animation.stop;
    }
  }, [inView, count]);

  useEffect(() => {
    const unsubscribe = rounded.onChange((v) => {
      setCurrentValue(v);
    });
    return () => unsubscribe();
  }, [rounded]);

  const formattedValue = new Intl.NumberFormat('id-ID').format(currentValue);

  return (
    <div style={{ minHeight: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div ref={ref}>
        <motion.h1>{formattedValue}</motion.h1>
      </div>
    </div>
  );
}
