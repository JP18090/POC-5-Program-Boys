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

### Sintaxe do React e Contextualização
"O React é uma poderosa biblioteca JavaScript para construir interfaces de usuário, principalmente para aplicações web, cuja sintaxe, baseada em componentes e JSX, torna a construção de UIs interativas, dinâmicas e mais intuitiva."

PS: React sempre é recomendado à ser utilizado em outro frmaework, como um dos principais: Next.js

Components: Uma boa prática é criar uma pasta components para armazenar seus componentes reutilizáveis. Aqui, você pode criar componentes menores que serão importados e usados nas páginas.

Imports e Exports
Importação: Você importa componentes para outros arquivos usando a sintaxe import. Por exemplo:

jsx

Copiar```
import Header from '../components/Header';```

Exportação: Você exporta componentes de um arquivo para torná-los disponíveis para importação em outros arquivos. Normalmente, você faz isso no final do arquivo do componente:

jsx

Exportando:
```
const Header = () => (
  <header>
    <h1>Bem-vindo ao Meu Site</h1>
  </header>
);

export default Header;
```

Princípios do React com Next.js

Componentes: O React se baseia na criação de componentes, que são blocos de construção de sua aplicação. Cada componente é responsável por uma parte específica da interface de usuário. Por isso a importância da criação da pasta components.

SSR (Server-Side Rendering): O Next.js permite renderizar páginas no servidor antes de enviá-las ao cliente. Isso melhora o desempenho e a SEO.

Rotas Automáticas: No Next.js, cada arquivo na pasta pages se torna uma rota automaticamente, simplificando a navegação em sua aplicação.

#### Sintaxe Básica do React

```TypeScript

```
#### Exemplos de funções

1. **import & export**: A base. Permitem a conexão dos diferentes arquivos e a criação customizada da interface do usuário, até mesmo de seu carregamento.
2. **const MeuComponente = () => { ... }**: Define um componente funcional que retorna a interface desejada.
3. **return ( ... )**: Retorna o JSX que descreve a UI do componente.
4. **useState(inicial)**: Cria um estado local dentro do componente, permitindo gerenciar dados dinâmicos.
5. **useEffect(() => { ... }, [dependências])**: Executa efeitos colaterais, como chamadas de API, após renderizações do componente.


## Exemplo de funcionamento (o que deve aparecer)

![image](https://github.com/user-attachments/assets/c8864bb4-e1f0-48f1-8618-6ba0a46e5f68)


**Feito com 🔺🔺🔺 por ProgramBoys**
```
