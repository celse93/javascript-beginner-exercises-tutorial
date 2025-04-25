var person = {
    name: "John",                //String
    lastName: "Doe",
    age: 35,                     //Number
    gender: "male",
    luckyNumbers: [7, 11, 13, 17], //Array
    significantOther: person2   //Object, yes, the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};

var family = {
    lastName: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  //To-Do: loop and add; consider nested loops
  //For in loop nested inside a For loop to iterate in each array and sum the values of all lucky numbers:
    for (let i = 0; i < family.members.length; i++) {
        for (let x in family.members[i].luckyNumbers) {
            sumOfAllLuckyNumbers = sumArrays(sumOfAllLuckyNumbers, family.members[i].luckyNumbers[x]); 
        }
    }
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:
family.members[0].luckyNumbers[3] = 33;

var person3 = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
};

// To add a new person to the family object:
family.members.push(person3);

function sumArrays(a, b) {
	return a += b;
}


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 
