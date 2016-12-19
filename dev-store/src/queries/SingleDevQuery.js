export default function SingleDevQuery(login){
  const BaseQuery =
  `{"query": "query {
      user(login: \\"${login}\\") {
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
              name
            }
          }
        }
        repositories (first: 10) {
          totalCount
          edges {
            node {
              name
              description
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
    }"}`
  return BaseQuery.replace(/(\r\n|\n|\r|\t)/gm,"");
}