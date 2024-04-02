import $api from './index'

export const createProduct = async (product) => {
  await $api.post('product/', product)
}

export const fetchProduct = async (page, limit) => {
  const { data } = await $api.get('product/', {
    params: {
      page,
      limit,
    },
  })
  return data
}

export const fetchProductByCategory = async (page, limit, category) => {
  try {
    const { data } = await $api.get('product/category/' + category, {
      params: {
        page,
        limit,
      },
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchOneProduct = async (id) => {
  const { data } = await $api.get('product/id/' + id)
  return data
}

export const createCategory = async (category) => {
  const { data } = await $api.post('/category', category)
  console.log(data)
  return data
}

export const fetchCategories = async (page, limit) => {
  const { data } = await $api.get('category/', {
    params: {
      page,
      limit,
    },
  })
  return data
}

export const getCategories = async () => {
  const { data } = await $api.get('category/all')
  return data
}
