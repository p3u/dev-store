**Apollo**
* pagination (github api)
* caching (github api)
* optimistic UI (adicionar dev pro carrinho)
* prefetching (hover over next dev page)

**Redis**
* guardar estado do carrinho
* cache requests pro api? Vai dar um trabalho do cão pra evitar alguns requests e correr o risco de dados sem sync.

**Dataloader**
* batch & cache? acho que não vou usar...

**React**
* Criar as views
```
Tabela de desenvolvedores
  Row desenvolvedor
    Preço desenvolvedor
    Botão Contratar desenvolvdor
Carrinho
Perfil dev
  Avatar
  Cards
Tela finalizar compra
  Lista items
    item individual
      Descrição
      Preço
      Horas
      Aumentar/Diminuir Horas
  AplicarDesconto
  FinalizarCompra
```

**NodeJS server**
* Auth + comunicar com UserDB? (Posso só usar um hashed cookie pra ver se é o mesmo usuário...)
* Atualizar / Checar estado do carrinho (GraphQL)
* Fazer os requests pro github API
* Validar o cupom "SHIPIT"
Devo usar algo como express-graphql, assim já mato logo a construção do API GraphQL

**Redux**
* Manter o estado da App no cliente e comunicar os smart-components
```
{
  shopping_cart: {
    [
      {id: 1a6aZk8Ekef5o1ZRs5==, name: dev1, hours: 2, hourly_wage: 200},
      {id: 1a6aZk8Ekef5o1ZRs5==, name: dev2, hours: 1, hourly_wage: 400}, //Será que é melhor eu deixar o name e hourly_wage só na lista de devs?
    ],
  },
  dev_list: {
    {id: 1a6aZk8Ekef5o1ZRs5==, name: dev1, hourly_wage: 200, qnty_repos: 50, followers: 15},
    {id: 1a6aZk8Ekef5o1ZRs5==, name: dev2, hourly_wage: 400, qnty_repos: 85, followers: 57},
    {id: 1a6aZk8Ekef5o1ZRs5==, name: dev3, hourly_wage: 200, qnty_repos: 55, followers: 13},
  },
  selected_dev: '1a6aZk8Ekef5o1ZRs5==',
  search_box_input: 'vtex',
  order_by: 'qnty_repos'
}  
```

**redux-promises**
* Resolver os github API requests

**Tachyons**
* Deixar tudo bonitin

**Axios**
* AJAX requests no servidor
* AJAX requests no broser (IE support :D)

**Jest**
* Unity Testing
