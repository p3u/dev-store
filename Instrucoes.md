## Objetivo

Criar o carrinho de compras de uma loja que vende desenvolvedores.

Queremos descobrir seu nível de habilidade em todas as áreas envolvidas na construção de um aplicativo web: back end, front end e usabilidade.

Sinta-se confortável para focar nas áreas que você tem mais habilidade.

## Tarefas e priorização

Priorize a lista de tarefas abaixo explicando os motivos da priorização de cada uma delas. Então, escolha seis tarefas para implementar.

* Criar as páginas: catálogo de desenvolvedores, pagina do desenvolvedor e carrinho
* Determinar o preço do desenvolvedor a partir de informações do seu perfil do GitHub, como por exemplo: followers, repos, stars, * commits, etc.
* Criar uma paginação para o catálogo de desenvolvedores.
* Popular o catálogo de desenvolvedores a partir de uma organização do GitHub.
* Permitir a escolha de quantidade de horas contratadas de cada desenvolvedor.
* Permitir a adição de um cupom de desconto que altera o preço total da compra. Utilize o código "SHIPIT".
* Adicionar um botão de "Finalizar compra" que leva o usuário a uma página de pedido confirmado.
* Criar uma ordenação para o catálogo de desenvolvedores.
* Faça sua API ser GraphQL.
* Transforme a aplicação em um Progressive Web App.

## Server side

Crie uma API em Node que, no mínimo, utilize uma lista em memória para guardar o estado do carrinho.

A integração com Github deve ser feita através de sua [API GraphQL](https://developer.github.com/early-access/graphql/).

## Client side

Crie uma single page application com [Create React App](https://github.com/facebookincubator/create-react-app) que utilize a API por AJAX.

Recomendamos o uso de [Tachyons](http://tachyons.io/) para CSS.

## Entrega e observações

Seu código deve estar disponível em um repositório git, preferencialmente hospedado no [Github](https://github.com).

Testes unitários são bem vindos.

Você pode utilizar plataformas como [Heroku](https://www.heroku.com/), [Now](https://zeit.co/now) ou [Google Cloud Plataform]((https://cloud.google.com/)) para nos mostrar a aplicação funcionando em produção.

## Referências

- GraphQL - [https://egghead.io/courses/build-a-graphql-server](https://egghead.io/courses/build-a-graphql-server)
- React - [https://egghead.io/courses/react-fundamentals](https://egghead.io/courses/react-fundamentals)

---

Boa sorte!