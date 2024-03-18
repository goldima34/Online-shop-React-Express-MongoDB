import React, { useEffect, useState } from "react";
import style from "../styles/BilingDetails.module.css";
import { NewPostGetCity, NewPostGetRegion, NewPostGetWarehouses } from "../api/NewPostApi";
import { Select, Button } from "antd";
export const BilingDetails = () => {
  const [regions, setRegions] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [loading, setLoading] = useState(true);
  const [searchCityString, setSearchCityString] = useState("");
  const [warehouses, setWarehouses] = useState([])
  const [selectedWarehouses, setSelectedWarehouses] = useState();

  useEffect(() => {
    NewPostGetCity(searchCityString).then((data) => setRegions(data));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [searchCityString]);

  const getWarehouse = (selectedCity) => {
    NewPostGetWarehouses(selectedCity).then((data) => console.log(data));
  };

  if (loading) {
    return <div></div>;
  }

  return (
    <div className={style.BilingWrapper}>
      <div className={style.BilingContainer}>
        <div className={style.BilingDetailsContainer}>
          <p>Деталі замовлення</p>
          <div>
            <div>
              <label>Ваше імя</label>
              <input />
            </div>
            <div>
              <label>Ваше прізвище</label>
              <input />
            </div>
            <div>
              <label>Ваше місто</label>
              <input />
            </div>
            <div>
              <label>Ваш номер телефону</label>
              <input />
            </div>
          </div>
        </div>
        <div className={style.BilingSuccessContainer}>
          <Select
            mode="single"
            value={selectedCity}
            showSearch={true}
            onChange={(value) => {
              setSelectedCity(value);
              getWarehouse(value);
            }}
            onSearch={(value) => setSearchCityString(value)} // Обновляем значение строки поиска при изменении
            style={{ width: 120 }}
            loading={loading}
            filterOption={false} // Отключаем автоматический фильтр опций
            notFoundContent={loading ? "Loading..." : "No data found"} // Отображаем сообщение при отсутствии данных
          >
            {regions.map((item) => (
              <Select.Option key={item.Ref} value={item.Description}>
                {item.Description}
              </Select.Option>
            ))}
          </Select>
          <Select
            mode="single"
            value={selectedCity}
            showSearch={true}
            onChange={(value) => {
              setSelectedCity(value);
              getWarehouse(value);
            }}
            onSearch={(value) => setSelectedWarehouses(value)} // Обновляем значение строки поиска при изменении
            style={{ width: 120 }}
            loading={loading}
            filterOption={false} // Отключаем автоматический фильтр опций
            notFoundContent={loading ? "Loading..." : "No data found"} // Отображаем сообщение при отсутствии данных
          >
            {regions.map((item) => (
              <Select.Option key={item.Ref} value={item.Description}>
                {item.Description}
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};
