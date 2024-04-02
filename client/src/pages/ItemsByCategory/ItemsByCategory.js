import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LoadingScreen } from '../../components/micro/loadingScreen/loading.js'
import { fetchProductByCategory } from '../../api/ItemApi.js'
import { Context } from '../../index.js'
import { ItemsPagination } from '../../components/ItemsPagination.js'

export const ItemsByCategory = () => {
  const { category } = useParams()
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const {item} = useContext(Context)

  useEffect(() => {
    const fetchData = () => {
      fetchProductByCategory(item.page, 18, category).then((data) => setItems(data))
    } 
    fetchData()
    console.log(items)
    setLoading(false)
  }, [category, items, item.page])

  if (loading && items) {
    return <LoadingScreen />
  }

  return (
    <>
      <div>ItemsByCategory</div>
      <ItemsPagination category={category} />
    </>
  )
}
