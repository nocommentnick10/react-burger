import { checkRes } from "./checkRes";

import { PATH } from "./constants";

export const getIngredients = async () => {
  try {
    const res = await fetch(`${PATH}/ingredients`);
    const data = await checkRes(res);
    return data.data;
  } catch (err) {
    return Promise.reject(new Error(err));
  }
};
