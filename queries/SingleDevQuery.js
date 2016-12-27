import {developerInfoQuery} from './developerInfoQuery';

export default function singleDevQuery(login) {
  // Poderia
  const BaseQuery =
  `{"query": "query {
      user(login: \\"${login}\\") ${developerInfoQuery}
    }"}`
  return BaseQuery.replace(/(\r\n|\n|\r|\t)/gm,"");
}
