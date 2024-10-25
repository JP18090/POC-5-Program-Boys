import React from "react";
import style from "./informacoes.module.css";

export default function InfoCard({ title, description, img }) {
  return (
    <div className={style.infoCard}>
      <img src={img} alt={title} className={style.cardImg} />
      <div className={style.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
