import { motion } from "framer-motion";

const slideAndFade = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98,
  },
};

const scaleAndFade = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.05,
  },
};

const blurAndFade = {
  initial: {
    opacity: 0,
    filter: "blur(10px)",
  },
  in: {
    opacity: 1,
    filter: "blur(0px)",
  },
  out: {
    opacity: 0,
    filter: "blur(10px)",
  },
};

const rotateAndFade = {
  initial: {
    opacity: 0,
    rotateX: -10,
    transformPerspective: 1000,
  },
  in: {
    opacity: 1,
    rotateX: 0,
    transformPerspective: 1000,
  },
  out: {
    opacity: 0,
    rotateX: 10,
    transformPerspective: 1000,
  },
};

const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

const tweenTransition = {
  type: "tween",
  ease: [0.43, 0.13, 0.23, 0.96],
  duration: 0.4,
};

export const AnimatedRoute = ({
  children,
  variant = "slideAndFade",
  transition = "tween",
}) => {
  const variants = {
    slideAndFade,
    scaleAndFade,
    blurAndFade,
    rotateAndFade,
  };

  const transitions = {
    spring: springTransition,
    tween: tweenTransition,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants[variant]}
      transition={transitions[transition]}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRoute;
