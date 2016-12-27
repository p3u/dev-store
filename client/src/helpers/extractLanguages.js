
// Just looping over repos, extracting langagues without duplicating them :)
export default function extractLanguages(repoEdges) {
  const languagesName = [];
  const languages = [];
  repoEdges.forEach( ({node: repo}) => { //Destructuring + alias
    repo.languages.edges.forEach( ({ node: language }) => { //Destructuring + alias
      if( !languagesName.includes(language.name) ){
        languages.push(language);
        languagesName.push(language.name);
      }
    });
  });
  return languages;
}
