export const filterItems = (data) => {
  return {
    bun: data.filter((item) => item.type === "bun"),
    sauce: data.filter((item) => item.type === "sauce"),
    main: data.filter((item) => item.type === "main"),
  };
};
