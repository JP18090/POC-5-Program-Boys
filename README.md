# ProgramBoys - (POC - 5) React

## Objetivo
Esta prova de conceito (POC) visa demonstrar a capacidade do grupo ProgramBoys em desenvolver uma aplicação web utilizando React.

## Integrantes
- Vitor Lemos
- Marcelo Takao
- José Pedro
- Guilherme Anaya

## Tecnologias Utilizadas
- React
- HTML5
- CSS3
- TypeScript

## Funcionalidades

1.**Interface de Usuário Dinâmica**:
Uma interface moderna e responsiva, construída com componentes React, que facilita a navegação e consulta das informações de produtos. <br>
2. **Atualização em Tempo Real**:
Utilização do estado do React para gerenciar e atualizar dinamicamente os dados exibidos com base nas interações do usuário. <br>
3. **Estrutura Básica de um Componente React**:
Em React, a interface é construída a partir de componentes, que são funções ou classes que retornam elementos JSX. Cada componente pode gerenciar seu próprio estado e propriedades. <br>

#### Exemplo de Componente
Aqui está um exemplo simples de como criar um componente: 
```TypeScript
import React from "react";
import style from "./components/informacoes.module.css";

const InfoCard = ({ title, description, img }) => (
  <div className="info-card">
    <img src={img} alt={title} className="card-image" />
    <div className="card-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

export default InfoCard;
```
