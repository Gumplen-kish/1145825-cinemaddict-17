const getRandom = (min = 0, max = 1) => {
  const bottom = Math.ceil(Math.min(min,max));
  const top = Math.floor(Math.max(min,max));
  return Math.floor(bottom + Math.random() * (top - bottom + 1));
};

export {getRandom};
