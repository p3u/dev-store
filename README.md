# VTEX Challange
[Live Demo](http://vtex-dev-store.herokuapp.com/)  

## Priorização de Featues
### Implementadas  
**Criar as páginas: catálogo de desenvolvedores, pagina do desenvolvedor e carrinho**  
*Básico para o site funcionar*  

**Criar uma paginação para o catálogo de desenvolvedores.**  
*Se não fizesse, site ficaria lento e esgotaria o limite do API do GitHub*  

**Popular o catálogo de desenvolvedores a partir de uma organização do GitHub.**  
*Precisava de uma forma de popular o catalogo. O API de GQL tem essa opção e me pareceu interessante para a usabilidade do site*  

**Permitir a escolha de quantidade de horas contratadas de cada desenvolvedor.**  
*Fácil de implementar e importante feature para um site de contratar pessoas*  

**Determinar o preço do desenvolvedor a partir de informações do seu perfil do GitHub, como por exemplo: followers, repos, stars, * commits, etc.**  
*Mesma razão acima, porém percebi que: Utilizar o número de estrelas é complicado. Para calcular o total de estrelas, precisamos dar fetch em todos os repos do usuário, o que é muito custoso. Acabei usando, mas sabendo que não era a solução ideal*  

**Adicionar um botão de "Finalizar compra" que leva o usuário a uma página de pedido confirmado.**  
*Também é fácil de implementar. Se tivesse mais tempo, melhoraria essa parte. Atualmente a página não confirma os dados da compra com o Servidor. Para isso, teria que passar a função de calcular preço do Desenvolvedor para o Servidor'*  

**Permitir a adição de um cupom de desconto que altera o preço total da compra. Utilize o código "SHIPIT".**  
*Esse de fato era fácil*  


### Não Implementadas  
**Criar uma ordenação para o catálogo de desenvolvedores.**  
*Percebi que ia ser chato de implementar por causa da paginação. Teria que ler todos os desenvolvedores da organização para pode ordenar por exemplo por preço. É uma boa feature, mas deixaria pra depois*  

**Transforme a aplicação em um Progressive Web App.**  
*Como nunca fiz Progressive Web Apps, achei que pudesse tomar muito tempo.*  

**Faça sua API ser GraphQL**  
*Nem daria tanto trabalho, mas considerando que a API é básica (poucas URIs) acho besteira implementar. Aumentaria a complexidade do projeto com mais uma tecnologia, e sinceramente não vejo tanto valor para esse projeto. Pode ser feito depois de qualquer maneira*  

## Pontos fortes
* Cache de requests tanto no cliente quanto no servidor (usando Redis)
* Ao pesquisar uma organização, primeiro o servidor faz um request de search para o Github para buscar a organização com o nome mais parecido
* Página do Catalogo e Perfil estão bem responsivas. A do Perfil especialmente deu muito trabalho
* As páginas do perfil e do checkout podem ser acessadas diretamente, e o webapp fará os requests necessários
* No geral, a forma como as estruturas foram modeladas ficou boa. Não me deu trabalho de interagir com os dados durante o desenvolvimento

## Pontos fracos
* As classes do Tachyons ficaram muito bagunçadas. Deveria ter lido mais sobre a biblioteca antes de começar a usar
* Os feedbacks de interação poderiam ser melhores. Não usei nenhum Ajax spinner, em algumas partes a resposta para o usuário é fraca
* Quando percebi que o tempo estava acabando, acabei fazendo algumas gambiarras como:
  * A parte de design ficou bem fraca. Acho que o UX está ok, porém não gastei tempo pensando em um conceito para o site, schema de cores, fontes, icones e etc...
  * Retornar um card ao invés de uma mensagem de erro quando uma empresa que não existe é procurada
  * Nos reducers, fiquei retornando cada pedaço do estado ao invés de usar o spread operator. Deveria ter limpado isso desde o início
  * Usar hashHistory em vez de tratar corretamente no servidor
  * O layout dá página de checkout está horrível (e com gambiarras, não parei para pensar no wireframe e sai tacando componentes)
* Repetição de código em alguns lugares. Alguns exemplos:
  * Os componentes terminados em Panel poderiam ser abstraidos em um componente genérico
  * As funções da API poderiam ser abstraidas em uma função genérica, dando mais estrutura e garantindo padrão nas respostas do servidor

# Ideias que tive mas não consegui criar tempo para implementar
* Corrigir todos os pontos fracos citados
* Renderizar uma primeira página com alguns devs já no servidor
* Criar uma autenticação via OAUTH e não somente via cookies
* Na página do catálogo, utilizaria um infinite scrolling automático. Iria deixar a UX bem melhor.

# Alguns aprendizados legais
Ia representar o catalogo de devs através de lista ou tabela.  
Percebi que iria ficar uma droga no celular.  
Optei por cards. Me parece que tabelas estão bem condenadas hoje em dia. Uma pena...    

Descobri depois de muita dor de cabeça que Object.assign() só faz uma shallow copy.  
Não entendia porque meu redux state estava mudando. Quando descobri usei JSON.parse(JSON.stringify(developersInCart))
