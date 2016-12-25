export default function organizationsDevsQuery(organization, endCursor) {
  const paginationArgument = (endCursor !== '0') ? `, after: \\"${endCursor}\\"` : '';
  const BaseQuery =
  `{"query": "query {
      organization(login: \\"${organization}\\") {
        login
        members(first: 8${paginationArgument}) {
          totalCount
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            cursor
            node {
              name
              avatarURL
              login
              email
              websiteURL
              bio
              location
              followers {
                totalCount
              }
              organizations (first: 10) {
                edges {
                  node {
                    avatarURL
                    login
                    name
                  }
                }
              }
              repositories (first: 30) {
                totalCount
                edges {
                  node {
                    name
                    description
                    stargazers{
                      totalCount
                    }
                    languages(first: 4) {
                      edges {
                        node {
                          name
                          color
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }"}`
  return BaseQuery.replace(/(\r\n|\n|\r|\t)/gm,"");
}
