/* there are two gynmastic teams ehich compete each other 3 times
so find the average and find which is thw winner team.
*/

const team1R1 = 97,team1R2 = 109,team1R3 = 101;
const team2R1 = 109,team2R2 = 95, team2R3 = 103;
const average1 = (team1R1+team1R2+team1R3)/3;
const average2 = (team2R1+team2R2+team2R3)/3;

console.log(average1,average2);

if(average1 === average2 && average1 >= 100 && average2 >= 100){
    console.log("Draw!");
}else if(average1 > average2 && average1 >= 100){
    console.log("Team1 has won the match");
}
else if(average1 < average2 && average2 >= 100){
    console.log("Team2 has won the match");
}
else{
    console.log("No one has won the match");
}