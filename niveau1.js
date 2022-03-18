const reponse = (choix) => {

let vote = [[]];
let stat = 0;
vote[0][0] = choix[1];
vote[0][1] = 1;

for (let i = 2; i < choix.length; i++) {
  for (let j = 0; j < vote.length; j++) {
    if (vote[j][0] == choix[i]) {
      stat = j;
      break;
    } else stat = -1;
  }
  stat != -1 ? (vote[stat][1] += 1) : vote.push([choix[i], 1]);
}


for (let i = 0; i < vote.length - 1; i++) {
  for (let j = i + 1; j < vote.length; j++) {
    if (vote[j][1] > vote[i][1]) {
      let temp = vote[j];
      vote[j] = vote[i];
      vote[i] = temp;
    }
  }
}

return (`${vote[0][0]} ${vote[1][0]}`);
}
