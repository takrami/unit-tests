export const hashtags = (
  text = "Hello #world this is a #string with #hashtags"
) => {
  const res = text.split(" ");
  const hashtags = [];
  res.map((item) => {
    if (item[0] === "#") {
      hashtags.push(item);
    }
  });
  return hashtags;
};
