export const CreateBasket = async () => {
  let basket = [];
  localStorage.setItem("basket", basket);
};

export const addItemToNotAuthBasket = async (newItem, count) => {
  let basket = JSON.parse(localStorage.getItem("basket")) || [];
  let found = false;
  basket.forEach((item) => {
    if (item.item._id === newItem._id) {
      item.count += count;
      found = true;
    }
  });

  if (!found) {
    basket.push({ item: newItem, count: count });
  }
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const getNotAuthBasket = () => {
  let basket = JSON.parse(localStorage.getItem("basket")) || [];
  return basket;
};

export const decreaseNotAuthBasket = (id) => {
  let basket = JSON.parse(localStorage.getItem("basket")) || [];
  basket.forEach((item) => {
    if (item.item._id === id && item.count > 1) {
      item.count--;
    }
  });
  localStorage.setItem("basket", JSON.stringify(basket));
  console.log(localStorage.getItem("basket"));
};

export const increaseNotAuthBasket = (id) => {
  let basket = JSON.parse(localStorage.getItem("basket")) || [];
  basket.forEach((item) => {
    if (item.item._id === id) {
      item.count++;
    }
  });
  localStorage.setItem("basket", JSON.stringify(basket));
  console.log(localStorage.getItem("basket"));
};

export const getSumNotAuthBasket = () => {
  let sum = 0;
  let basket = JSON.parse(localStorage.getItem("basket")) || [];
  basket.forEach((item) => {
    sum += item.item.price * item.count;
  });
  return sum;
};

export const deleteNotAuthBasket = (itemId) => {
  let basket = JSON.parse(localStorage.getItem("basket")) || [];
  basket = basket.filter((item) => item.item._id !== itemId);
  localStorage.setItem("basket", JSON.stringify(basket));
};
