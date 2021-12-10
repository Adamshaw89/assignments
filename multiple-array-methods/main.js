/*
1. Returns a list of everyone older than 18, which is
2. sorted alphabetically by last name, and where
3. each name and age is embedded in a string that looks like an HTML `<li>` element.*/
var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
/*
peopleArray.sort((a,b) => a.lastName.localeCompare(b.lastName))

let ofAge = peopleArray.reduce(function(final, person){
     if (person.age >= 18){
        final.push("<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li>")
    }  
    return final
},[])

console.log(ofAge)
*/
/*
- Create another array of one or more individuals and add it to the original array.
- Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
- Remove the second individual from the array.
- Return the array in reverse order.*/

let will = [
    {
    firstName: "William",
    lastName: "Willy",
    age: 39
    }]
let newArr = peopleArray.concat(will);

let yOrA = newArr.reduce(function(final, person){
    if (person.lastName.charAt(person.lastName.length -1) == "y" || person.lastName.charAt(person.lastName.length -1) == "a"){
        final.push(person)
    }
    final.reverse()
    return final
    },[])
    yOrA.splice(1,1)



console.log(yOrA)
