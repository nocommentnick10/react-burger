import { checkRes } from "./checkRes";

export const getIngredients = async (api) => {
  try {
    const res = await fetch(api);
    const data = await checkRes(res);
    return data.data;
  } catch (err) {
    console.log(err)
  }
};
