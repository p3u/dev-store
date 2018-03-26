export const developerInfoQuery = `
{
  name
  avatarUrl
  login
  email
  websiteUrl
  bio
  location
  followers {
    totalCount
  }
  organizations (first: 10) {
    edges {
      node {
        avatarUrl
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
}`;
