const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.5,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 1.2,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1,
};

const animationPage = {
  pageVariants,
  pageTransition,
};

export default animationPage;
