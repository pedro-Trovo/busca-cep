<h1>Busca CEP</h1> 

# Tópicos 

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Contribuidores](#contribuidores)
- [Pré-requisitos](#pré-requisitos)
- [Inicializando o Projeto](#inicializando-o-projeto)
- [Imagens do Projeto](#imagens-do-projeto)

# Sobre o Projeto
Este projeto foi elaborado para a matéria de Programação para Dispositivos Móveis, e se trata de uma aplicação web onde o usuário pode buscar endereços reais informando um CEP.

# Tecnologias
Este projeto utiliza a biblioteca **React**, com o empacotador **Vite**, para criar uma aplicação web leve e rápida. A interface foi construída com componentes do **PrimeReact** e estilizada com **PrimeFlex**. As requisições para busca de CEPs são feitas com a biblioteca **Axios**, utilizando a API pública do [ViaCEP](https://viacep.com.br/) para obter os dados em tempo real.
<table align="center">
    <tr>
        <th>
            Linguagens
        </th>
        <td>
            <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E%22"/>
            <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
        </td>
    </tr>
    <tr>
        <th>
            Frameworks / Libs
        </th>
        <td>
            <img alt="React" src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black"/>
            <img alt="Vite" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/>
            <img alt="PrimeReact" src="https://img.shields.io/badge/PrimeReact-%230072C6.svg?style=for-the-badge&logo=prime&logoColor=white"/>
            <img alt="PrimeFlex" src="https://img.shields.io/badge/PrimeFlex-%230072C6.svg?style=for-the-badge&logo=prime&logoColor=white"/>
            <img alt="Axios" src="https://img.shields.io/badge/axios-%230072C6.svg?style=for-the-badge&logo=axios&logoColor=white"/>
        </td>
    </tr>
    <tr>
        <th>
            Editor
        </th>
        <td>
            <img alt="Visual Studio Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
        </td>
    </tr>
</table>


# Contribuidores
<a href="https://github.com/pedro-Trovo/busca-cep/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=pedro-Trovo/busca-cep" />
</a>

# Pré-requisitos
1. Instale o [`Node.js`](https://nodejs.org/en) e certifique-se de que ele inclua o gerenciador de pacotes `npm`.
2. Instale as dependências do projeto com:
```console
npm install
```

# Inicializando o projeto
1. Faça um `git clone` do repositório:
```console
git clone https://github.com/pedro-Trovo/busca-cep
```
2. Acesse a pasta `busca-cep`, abra o CMD e execute o seguinte código:
```console
npm run dev
```
3. Acesse o `localhost` para abrir o site:
```console
http://localhost:5173/
```

<br><br>

# Imagens do Projeto
## Estado da tela ao iniciar o projeto
<img alt="Tela Inicial" src="readme-imgs/Inicializacao.png">

## Estado da tela ao realizar buscas por CEPs
<img alt="Tela de Resultados" src="readme-imgs/Resultados.png">
