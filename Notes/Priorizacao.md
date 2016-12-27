**Implementadas**  
Criar as páginas: catálogo de desenvolvedores, pagina do desenvolvedor e carrinho  
*Basico para o site funcionar*
Criar uma paginação para o catálogo de desenvolvedores.  
*Se não fizesse, site ficaria lento e esgotaria o limite do API do GitHub*   
Popular o catálogo de desenvolvedores a partir de uma organização do GitHub.  
*Precisava de uma forma de popular o catalogo. O API de GQL tem essa opção e me pareceu interessante para a usabilidade do site*
Permitir a escolha de quantidade de horas contratadas de cada desenvolvedor.  
*Fácil de implementar e importante feature para um site de contratar pessoas*
Determinar o preço do desenvolvedor a partir de informações do seu perfil do GitHub, como por exemplo: followers, repos, stars, * commits, etc.  
*Mesma razão acima, porém percebi que: Utilizar o número de estrelas é complicado. Para calcular o total de estrelas, precisamos dar fetch em todos os repos do usuário, o que é muito custoso. Acabei usando, mas sabendo que não era a solução ideal*
Adicionar um botão de "Finalizar compra" que leva o usuário a uma página de pedido confirmado.  
*Também é facil de implementar. Se tivesse mais tempo, melhoraria essa parte. Atualmente a página não confirma os dados da compra com o Servidor. Para isso, teria que passar a função de calcular preço do Desenvolvedor para o Servidor'*
Permitir a adição de um cupom de desconto que altera o preço total da compra. Utilize o código "SHIPIT".  
*Esse de fato era fácil*

**Não Implementadas**  
Criar uma ordenação para o catálogo de desenvolvedores.  
*Percebi que ia ser chato de implementar por causa da paginação. Teria que ler todos os desenvolvedores da org para pode ordenar por exemplo por preço. É uma boa feature, mas deixaria pra depois*
Transforme a aplicação em um Progressive Web App. (Também seria legal ter o site em Progressive Web App... mas não sei estimar quanto tempo demora, prefiro deixar para depois)  
*Como nunca fiz Progressive Web Apps, achei que pudesse tomar muito tempo.*
Faça sua API ser GraphQL  
*Nem daria tanto trabalho, mas considerando que a API é basica (poucas URIs) acho besteira implementar. Aumentaria a complexidade do projeto com mais uma tecnologia, e sinceramente não vejo tanto valor para esse projeto. Pode ser feito depois de qualquer maneira*
