import axios from "axios";

const apiKey = "a8ce1029e7856b8a14e6b172318a0f31";

export const NewPostGetCity = async (city) => {
  try {
    const response = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
      apiKey: apiKey,
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: {
        Ref: "",
        FindByString: city,
      },
    });

    // Обработка полученных данных
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const NewPostGetWarehouses = async (city) => {
  try {
    const response = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
      apiKey: apiKey,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: city,
      },
    });

    // Обработка полученных данных
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
