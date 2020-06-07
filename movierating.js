function solve (input){
let numberMoviesChossen=Number(input.shift());
let highestRating = Number.MIN_VALUE;
let highName = ``;
let lowestRating = Number.MAX_VALUE;
let lowestName = ``;
let averageRating = 0;
for(let i=1;i<=numberMoviesChossen;i++){
    let movieName=input.shift()
    let ratingOfMovie=Number(input.shift())
    averageRating+=ratingOfMovie
    if(ratingOfMovie> highestRating){ 
        highestRating=ratingOfMovie;
        highName=movieName;
    }
    if(ratingOfMovie < lowestRating){
        lowestRating=ratingOfMovie;
        lowestName=movieName;
    }
}
console.log(`${highName} is with highest rating: ${highestRating.toFixed(1)}`)
console.log(`${lowestName} is with lowest rating: ${lowestRating.toFixed(1)}`)
console.log(`Average rating: ${(averageRating / numberMoviesChossen).toFixed(1)}`)


}
solve([
    5,
'A Star is Born',
7.8,
'Creed 2',
7.3,
'Mary Poppins',
7.2,
'Vice',
7.2,
'Captain Marvel',
7.1


])