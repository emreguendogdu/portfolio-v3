const duration = 1,
  delay = 0.35

export const PRELOADER_DURATION = duration

const transition = { duration, delay, ease: [0.76, 0, 0.24, 1] }
const transitionNoDelay = {
  duration,
  ease: [0.45, 0, 0.55, 1],
}

export const slide = {
  initial: {
    top: "-300px",
  },
  enter: {
    top: "-100vh",
    transition,
    transitionEnd: { top: "100vh" },
  },
  exit: {
    top: "-300px",
    transition: transitionNoDelay,
  },
}

export const curve = (initialPath, targetPath) => {
  return {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition,
    },
    exit: { d: initialPath, transition: transitionNoDelay },
  }
}

export const text = {
  initial: { opacity: 1 },
  enter: {
    opacity: 0,
    top: -100,
    transition,
    transitionEnd: { top: "47.5%" },
  },
  exit: {
    opacity: 1,
    top: "40%",
    transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
}
