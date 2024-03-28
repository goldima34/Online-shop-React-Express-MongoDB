import $api from "./index";

// export const fetchTypes = async () => {
//   const { data } = await $api.get("api/type");
//   return data;
// };

// export const createBrand = async (brand) => {
//   const { data } = await $api.post("api/brand", brand);
//   return data;
// };

// export const fetchBrands = async () => {
//   const { data } = await $api.get("api/brand");
//   return data;
// };

export const createProduct = async (device) => {
  const { data } = await $api.post("product/", device);
  return data;
};

export const fetchProduct = async (page, limit) => {
  const { data } = await $api.get("product/", {
    params: {
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneProduct = async (id) => {
  const { data } = await $api.get("product/" + id);
  return data;
};

export const createCategory = async (category) => {
  const { data } = await $api.post("/category", category);
  console.log(data)
  return data;
};

export const fetchCategories = async (page, limit) => {
  const { data } = await $api.get("category/", {
    params: {
      page,
      limit,
    },
  });
  return data;
};
