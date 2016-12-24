// Extracting repos and sorting them by number of stars
export default function extractRepos(repoEdges) {
  return repoEdges.map( ({node: repo}) => {
    return { name: repo.name,
             description: repo.description,
             stars: repo.stargazers.totalCount };
  })
  .sort( ({stars: a},{stars: b}) => b-a);
}
