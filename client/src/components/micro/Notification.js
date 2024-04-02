import React from "react";
import styles from "../../styles/Notification.module.css";

export const ShowNotification = () => {
  const notificationContainer = document.querySelector(
    `.${styles.notification}`
  );
  notificationContainer.style.display = "block";
  setTimeout(function () {
    notificationContainer.style.display = "none";
  }, 5000);
};

export const Notification = ({ name, text }) => {
  function closeNotification() {
    document.querySelector(`.${styles.notification}`).style.display = "none";
  }

  return (
    <div className={styles.notificationContainer}>
      <div className={styles.notification}>
        <span className={styles.close} onClick={closeNotification}>
          ×
        </span>
        {text ? text : `Товар: ${name} додано до корзини`}
        <div className={styles.progressBar}></div>
      </div>
    </div>
  );
};
