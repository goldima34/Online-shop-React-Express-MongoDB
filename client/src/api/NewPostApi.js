import axios from "axios";

const apiKey = "";

export const NewPostGetRegion = async () => {
  try {
    const response = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
      apiKey: apiKey,
      modelName: "Address",
      calledMethod: "getSettlementAreas",
      methodProperties: {
        Ref: "",
      },
    });

    // Обработка полученных данных
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
