/*****************************Assignment Arrays***************************/

const calcAge = function(birthYear){
    console.log(birthYear);
    return 2037-birthYear;
}

const years = [1990,1967,2002,2010,2018];

//console.log(calcAge(years)); 

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age5 = calcAge(years[years.length-1]);

// console.log(age1,age2,age3,age5);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];

console.log(ages);
//document.getElementById("span1").innerHTML = ages;