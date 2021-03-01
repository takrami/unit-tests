export const firstLast = (items = ["a", "b"]) => {
  if (items.length > 1) {
    return `First: ${items[0]}, Last: ${items[items.length - 1]}`;
  }
  if (items.length === 1) {
    return `Only item: ${items[0]}`;
  }
  if (items.length === 0) {
    return "No items!";
  }
};
