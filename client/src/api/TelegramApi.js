import axios from "axios";

export const sendOrderToTelegram = async (orderData, items, delType) => {
  try {
    const botToken = "7180030436:AAFrtXYz69R2ruFcTv2RXsJStlmAYrH8f1s";
    const chatId = "-1002015638471";
    let message;
    switch (delType) {
      case 1:
        message = `Нове замовлення:\nІмя: ${orderData.firstName}\nEmail: ${orderData.Email}\nНомер: ${orderData.number}\nДоставка: по Житомиру\nАдресса: ${orderData.adressToDelivery}\n\Товар:`;
        break;
      case 2:
        message = `Нове замовлення:\nІмя: ${orderData.firstName}\nEmail: ${orderData.Email}\nНомер: ${orderData.number}\nДоставка: Самовивіз\n\Товар:`;
        break;
      case 3:
        message = `Нове замовлення:\nІмя: ${orderData.firstName}\nEmail: ${orderData.Email}\nНомер: ${orderData.number}\nДоставка: Нова Пошта\nМісто: ${orderData.city}\nВідділення: ${orderData.warehouse}\n\nТовар:`;
        break;
      default:
        break;
    }
    const total = items.reduce(
      (acc, item) => acc + item.count * item.item.price,
      0
    );

    items.map((item) => {
         message += `\nНазва: ${item.item.name} | Кількість: ${item.count} | Прайс на сайті: ${item.item.price} грн`;
    });

    
    message += `\nСумма: ${total} грн`;
    console.log(total);

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    await axios.post(url, {
      chat_id: chatId,
      text: message,
    });
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
};
