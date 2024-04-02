import React, { useEffect, useState } from 'react'
import styles from './CreateProduct.module.css'
import { createProduct, getCategories } from '../../../api/ItemApi'
import { Select } from 'antd'
import { Notification, ShowNotification } from '../../micro/Notification'
import { useForm } from 'react-hook-form'

export const CreateProduct = ({ show, onHide }) => {
  const [name, setName] = useState()
  const [file, setFile] = useState()
  const [categories, setCategories] = useState()
  const [selectedCategory, setSelectedCategory] = useState()
  const [loading, setLoading] = useState(true)
  const [price, setPrice] = useState()

  useEffect(() => {
    const fetchData = () => {
      getCategories().then((data) => setCategories(data))
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }
    fetchData()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const addProduct = (data) => {
    console.log()
    const formData = new FormData()
    formData.append('img', data.file[0])
    formData.append('category', data.category.name)
    formData.append('name', data.name)
    formData.append('price', data.price)
    //createProduct(formData)
    onHide()
    ShowNotification()
  }

  const selectFile = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <>
      <div
        className={styles.ModalBackground}
        style={show ? { display: 'flex' } : { display: 'none' }}
      >
        <form
          onSubmit={handleSubmit(addProduct)}
          className={styles.modalContainer}
        >
          <div className={styles.modalHedaer}>
            <span>Додати товар</span>
          </div>
          <div className={styles.ModalInput}>
            <input
              {...register('name', { required: true })}
              placeholder={'Введіть назву товара'}
            />
            {errors.name && (
              <span className={styles.adminErrorInput}>Введіть назву</span>
            )}
            {loading ? (
              <span>loading</span>
            ) : (
              <select
                placeholder="Виберіть категорію"
                className={styles.CustomSelectCategory}
                {...register('category', { required: true })}
              >
                {categories.map((item) => (
                  <option key={item._id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            )}
            {errors.category && (
              <span className={styles.adminErrorInput}>Введіть категорію</span>
            )}
            <input
              {...register('price', { required: true })}
              placeholder={'Введите ціну товара'}
            />
          </div>
          <div className={styles.ModalFileInput}>
            <input
              {...register('file', { required: true })}
              onChange={selectFile}
              type="file"
            />
          </div>
          <div className={styles.ModalButtonsWrapper}>
            <button className={styles.ModalButtonReject} onClick={onHide}>
              Закрыть
            </button>
            <button className={styles.ModalButtonAccept} type="submit">
              Добавить
            </button>
          </div>
        </form>
      </div>
      <Notification text={`Товар ${name} додано`} />
    </>
  )
}
