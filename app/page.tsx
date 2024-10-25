import React from "react";
import InfoCard from "./components/infomacoes";
import style from "./components/informacoes.module.css";

export default function Home() {
  return (
    <main>
      <h1 className={style.title}>
        Bem-vindo à Página de Informações sobre carros
      </h1>
      <div className={style.cardContainer}>
        <InfoCard
          title="McLaren W1"
          description="Novo carro icônico que substituirá a famosa P1 na Santíssima Trindade"
          img="./images/McLarenW1.jpg"
        />
        <InfoCard
          title="McLaren P1"
          description="Famoso carro híbrido que compõe a lendária Famosa Trindade"
          img="./images/McLarenP1.jpg"
        />
      </div>
    </main>
  );
}
