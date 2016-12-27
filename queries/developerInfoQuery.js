export const developerInfoQuery = `
{
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
}`;
