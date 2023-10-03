# upload-ia

## 💻 Projeto

Aplicação que possibilita realizar upload de videos, e por meio da IA, criar automaticamente títulos chamativos e descrições com um boa indexação. 

### Destaques
- ⭐ Web Assembly, para usar o processamento do próprio navegador, para fazer a conversão do vídeo em um .mp3, e assim enviar para o back-end
- ⭐ Inteligência Artificial para gerar os conteúdos

## 👨‍💻 Tecnologias

A aplicação é constituída de um front-end e um back-end. Uma grande gama de tecnologias e ferramentas foram usadas para construir tudo.

### Front End
- React
- Vite
- Shadcn/ui
- Web Assembly

### Back End
- Node.js
- Fastify
- Vercel AI SDK
- Open AI API

## 🛠️ Quer testar?

Faça um clone do repositório na sua máquina local. 

**Certifique-se de ter o git instalado**
``` git
git clone https://github.com/lordaval/upload-ia.git
```
Ou Baixe o arquivo zip clicando <a href="">aqui</a>, e em seguida Extraia o arquivo zip do repositório.


Em seguida, usando seu gerenciador de pacotes favorito, instale as dependências necessárias nas duas pastas (frontend e backend). 

**Obs: Cada pasta é uma parte da aplicação, e tem seu próprio <code>package.json</code>**

``` js
/* Caso você use o npm */
npm i

/* Caso você use o yarn */
yarn install

/* Caso você use o pnpm */
pnpm i

```

- No backend, você deve criar um arquivo <code>.env</code> na raiz da sua pasta, e preencher as variavéis de ambiente com a chave da sua API da OpenAI, e a URL do seu banco de dados:

``` env
OPENAI_KEY=
DATABASE_URL=
```

Feito isso, você pode iniciar o backend, rodando o script de desenvolvimento:

``` js
/* Caso você use o npm */
npm dev

/* Caso você use o yarn */
yarn dev

/* Caso você use o pnpm */
pnpm dev
```
Por padrão, o backend vai rodar na porta <code>3333</code>. Você pode acessar por meio do localhost: <code>http://localhost:3333</code> ou <code>http://127.0.0.1:3333</code>


- No frontend, você não precisa fazer nenhuma configuração adicional, basta certificar-se que o backend está rodando, e rodar o script de desenvolvimento:
``` js
/* Caso você use o npm */
npm dev

/* Caso você use o yarn */
yarn dev

/* Caso você use o pnpm */
pnpm dev
```

Feito isso, você poderá utilizar e testar a aplicação á vontade! 

**Obs: Tenha em mente que, caso você não tenha crédito na sua conta da OpenAI, pertencente á chave que você inseriu, a aplicação não irá funcionar corretamente. Ao criar uma nova conta na OpenAI, você ganha $5,00 em créditos para usar.**
