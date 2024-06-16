// useGsap.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const useGsap = (animation, deps = []) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const tl = gsap.timeline();
      animation(tl, ref.current);
    }
  }, deps);

  return ref;
};

export default useGsap;
