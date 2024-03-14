import $api from "./index";

export const getBasket = async (userId) => {
  const { data } = await $api.get("basket/" + userId);
  return data;
};

export const additemToBasket = async (userId, itemId, amount) => {
  const { data } = await $api.post("basket/" + userId, {
    itemId,
    amount,
  });
  return data;
};
