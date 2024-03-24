import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { NewPostGetCity, NewPostGetWarehouses } from "../../api/NewPostApi";

export const NovaPoshta = ({ loading, onCityChange, onWarehouseChange }) => {
  const [regions, setRegions] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [searchCityString, setSearchCityString] = useState("");
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouses, setSelectedWarehouses] = useState();

  useEffect(() => {
    NewPostGetCity(searchCityString).then((data) => setRegions(data));
  }, [searchCityString]);

  const getWarehouse = (selectedCity) => {
    NewPostGetWarehouses(selectedCity).then((data) => setWarehouses(data));
  };

  const handleCityChange = (value) => {
    setSelectedCity(value);
    setSelectedWarehouses(null);
    onCityChange(value);
    getWarehouse(value);
  };

  const handleWarehouseChange = (value) => {
    onWarehouseChange(value);
    setSelectedWarehouses(value)
  };

  return (
    <>
      <div style={{ display: "block", marginTop: 10 }}>
        <Select
          mode="single"
          value={selectedCity}
          placeholder="Виберіть місто"
          showSearch={true}
          onChange={handleCityChange}
          onSearch={(value) => setSearchCityString(value)}
          loading={loading}
          style={{ width: 300 }}
          filterOption={false}
          notFoundContent={loading ? "Loading..." : "No data found"}
        >
          {regions.map((item) => (
            <Select.Option key={item.Ref} value={item.Description}>
              {item.Description}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div style={{ display: "block", marginTop: 10}}>
        <Select
          mode="single"
          value={selectedWarehouses}
          placeholder="Виберіть відділення"
          showSearch={true}
          onChange={handleWarehouseChange}
          style={{ width: 300 }}
          loading={loading}
          filterOption={false}
          notFoundContent={loading ? "Loading..." : "Спочатку виберіть місто"}
        >
          {warehouses.map((item) => (
            <Select.Option
              style={{ fontSize: "12px" }}
              key={item.Ref}
              value={item.Description}
            >
              {item.Description}
            </Select.Option>
          ))}
        </Select>
      </div>
    </>
  );
};
