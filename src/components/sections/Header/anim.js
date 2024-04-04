const transition = { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] }

export const translate = {
  initial: { y: "100px", opacity: 0 },
  enter: (i) => ({
    y: 0,
    transition: { ...transition, delay: i[0] },
    opacity: 1,
  }),
  exit: (i) => ({
    y: "100%",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
    opacity: 0,
  }),
}
