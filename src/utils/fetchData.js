export const fetchData = async (api) => {
  try {
    const res = await fetch(api);
    let data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
