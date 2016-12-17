export default function CatalogQuery(organization){
  const BaseQuery =
  `{"query": "query {
      organization(login: \\"${organization}\\") {
        login
        members(first: 30) {
          totalCount
          edges {
            cursor
            node {
              followers {
                totalCount
              }
              repositories {
                totalCount
              }
              location
              contributedRepositories(first: 30) {
                totalCount
                edges {
                  node {
                    stargazers {
                      totalCount
                    }
                  }
                }
              }
              id
              name
              avatarURL
            }
          }
        }
      }
    }"}`
  return BaseQuery.replace(/(\r\n|\n|\r|\t)/gm,"");
}
