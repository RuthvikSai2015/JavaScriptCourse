const johnArray = {    
    firstName: 'John',
    lastName : 'Schmed',
    birthYear : 1991,
    hasDriversLicense : false,
    job: 'trainer',
    friends: ['Michael','Steven','Peter'],
    calcAge : function(){
     //   console.log("before add property ---------",this);
        this.age = 2037 - this.birthYear;
      //  console.log("after add property ---------",this);
        return this.age;
    },
    getSummary: function(){
         return `${this.firstName} is a ${this.calcAge()} - years old ${this.job} and he has  ${this.hasDriversLicense ? 'a' : 'no' } driver's license`  ;
    }
}

johnArray.calcAge();
// console.log(johnArray.age);
// console.log(johnArray.age);


//Please do not repeat yourself (wrting the function again)

//write a method called getSummary should return a string to summarise the data of john


console.log(johnArray.getSummary());

const ProgObject = {
    language:'C++',
    inventedYear: 1960,
    author: 'Jarne Stroustrup',
    getSummary : function(){
        return `${this.language} was invented in ${this.inventedYear} by ${this.author} and it has been ${2037-this.inventedYear} years till now`;
    }
}

console.log(ProgObject.getSummary());