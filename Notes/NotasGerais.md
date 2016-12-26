Se o webapp finalizasse a transação, seria fundamental calcular o preço tambem no servidor,
garantindo que o usuário não manipulou dados no client side como:
* Preço do developer
* Horas contratadas

Fetching developers demora um pouco porque ele faz 2 batidas no servidor.
A primeira para confirmar o nome da empresa com Search com API REST do github.
A segunda para fazer o request pelo API do GraphQL.

O webapp não busca todas as estrelas de um developer.
Para fazer isso, seria necessário fazer diversas idas ao servidor para cada dev.
Isso porque, para calcular o número de estrelas, é necessário buscar todos os repos.
E como a API limita 30 repos por request, teria que fazer varios requests para pegar todos os repos.  
