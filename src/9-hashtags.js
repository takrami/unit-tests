export const hashtags = (text) => {
  const res = text.split(" ");
  const hashtags = [];
  res.map((item) => {
    if (item[0] === "#") {
      hashtags.push(item);
    }
  });
  return hashtags;
};
