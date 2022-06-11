export const fadeUpVariants = {
  hidden: {opacity: 0, y: 200, display: 'none'},
  visible: {opacity: 1, y: 0, display: 'block', transition: {duration: 0.5, ease: 'easeOut', type: 'tween'}},
};

export const svgVariants = {
  start: {opacity: 0, pathLength: 0},
  end: {opacity: 1, pathLength: 1, strokeDasharray: 0, transition: {duration: 1, ease: 'easeInOut'}},
};
