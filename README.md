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
import style from "./informacoes.module.css";

export default function InfoCard({ title, description, img }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.infoCard}>
        <img src={img} alt={title} className={style.cardImg} />
        <div className={style.cardContent}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

```

### Sintaxe do React e Explicação
O React é uma poderosa biblioteca JavaScript para construir interfaces de usuário, principalmente para aplicações web, cuja sintaxe, baseada em componentes e JSX, torna a construção de UIs interativas, dinâmicas e mais intuitiva.



#### Sintaxe Básica do React

```TypeScript

```

1. **import React from 'react'**: Importa a biblioteca React para usar em seu componente.
2. **const MeuComponente = () => { ... }**: Define um componente funcional que retorna a interface desejada.
3. **return ( ... )**: Retorna o JSX que descreve a UI do componente.
4. **useState(inicial)**: Cria um estado local dentro do componente, permitindo gerenciar dados dinâmicos.
5. **useEffect(() => { ... }, [dependências])**: Executa efeitos colaterais, como chamadas de API, após renderizações do componente.


## Exemplo de funcionamento (o que deve aparecer)

![image](https://github.com/user-attachments/assets/9a2661cf-0732-4844-ab3c-b6f1ffe474fe)


**Feito com 🔺🔺🔺 por ProgramBoys**
```
