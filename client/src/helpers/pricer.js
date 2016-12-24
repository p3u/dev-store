export default function pricer( repos, languages, followers, stars ) {
  const minimumWage = 50;
  const langaguesBonus = languages * 10;
  
  let followersBonus = 0;
  let starsBonus = 0;
  let reposBonus = 0;

  if (followers > 300) {
    followersBonus = 200
  }
  else if (followers > 100) {
    followersBonus = 80
  }
  else if (followers > 50) {
    followersBonus = 50
  }

  if (stars > 180) {
    starsBonus = 200
   }
  else if (stars > 60) {
    starsBonus = 80
  }
  else if (stars> 30) {
    starsBonus = 50
  }

  else if (repos > 100) {
    reposBonus = 100
  }
  else if (repos > 50) {
    reposBonus = 60
  }
  else if (repos > 10) {
    reposBonus = 20
  }

  return minimumWage + followersBonus + starsBonus + langaguesBonus + reposBonus;
}
