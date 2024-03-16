import $api from "./index";

export const getBasket = async (userId) => {
  const { data } = await $api.get("basket/" + userId);
  return data;
};

export const deleteFromBasket = async (userId, itemId) => {
  const { data } = await $api.delete(`basket/${userId}/${itemId}`);
  return data;
};

export const increaseCount = async (userId, basketItemId) => {
  try {
    const { data } = await $api.put(
      `basket/increase/${userId}/${basketItemId}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error increasing count");
  }
};

export const decreaseCount = async (userId, basketItemId) => {
  try {
    const { data } = await $api.put(
      `basket/decrease/${userId}/${basketItemId}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error decreasing count");
  }
};

export const additemToBasket = async (userId, itemId, amount) => {
  const { data } = await $api.post("basket/" + userId, {
    itemId,
    amount,
  });
  return data;
};
