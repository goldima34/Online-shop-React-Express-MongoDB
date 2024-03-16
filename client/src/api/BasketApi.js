import $api from "./index";

export const getBasket = async (userId) => {
  const { data } = await $api.get("basket/" + userId);
  return data;
};

export const deleteFromBasket = async (userId, itemId) => {
  const { data } = await $api.delete(`basket/${userId}/${itemId}`);
  return data;
};

export const additemToBasket = async (userId, itemId, amount) => {
  const { data } = await $api.post("basket/" + userId, {
    itemId,
    amount,
  });
  return data;
};
