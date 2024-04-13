const transition = { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] }

export const translate = {
  initial: { opacity: 0 },
  enter: (i) => ({
    transition: { ...transition, delay: i[0] },
    opacity: 1,
  }),
  exit: (i) => ({
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
    opacity: 0,
  }),
}
