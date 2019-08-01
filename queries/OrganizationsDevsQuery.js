import {developerInfoQuery} from './developerInfoQuery';

export default function organizationsDevsQuery(organization, endCursor) {
  const paginationArgument = (endCursor !== '0') ? `, after: \\"${endCursor}\\"` : '';
  const BaseQuery =
  `{"query": "query {
      organization(login: \\"${organization}\\") {
        login
        membersWithRole(first: 8${paginationArgument}) {
          totalCount
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            cursor
            node ${userQuery}
          }
        }
      }
    }"}`
  return BaseQuery.replace(/(\r\n|\n|\r|\t)/gm,"");
}
