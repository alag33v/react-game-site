export const fadeIn = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8
    }
  }
}

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      when: "afterChildren"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8
    }
  }
}