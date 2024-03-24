import React from "react";
import style from "../../styles/PopUpInvoice.module.css";
import { SuccessIcon } from "./Arrows";
import { useNavigate } from "react-router-dom";

export const PopUpInvoice = () => {

  const navigate = useNavigate();

  return (
    <div className={style.PopUpBg}>
      <div className={style.PopUpWrapper}>
        <div className={style.PopUpTextWrapper}>
          <p>Ваше замовленння прийнято!</p>
        </div>
        <div className={style.PopIconUpWrapper}>
          <SuccessIcon />
        </div>
        <div className={style.PopButtonUpWrapper}>
          <button type="check" onClick={() => navigate("/")}>На головну</button>
        </div>
      </div>
    </div>
  );
};
