/*
You should collect the following information from the user:

- First name (text input)
- Last name (text input)
- Age (number input)
- Gender (radio buttons with 2 or more options)
- Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
- Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)

Each element of the form should be given a `name` attribute so you can access the data in JavaScript and do stuff with it.

There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this:
*/
const form = document.form



document.form.addEventListener("submit", function(e){
    e.preventDefault()
    let fName = "First Name: " + document.form.fname.value;
    let lname = "\nLast Name: " + document.form.lname.value;
    let age = "\nAge: " + document.form.age.value
    let gender = "\nGender: " + document.form.gender.value
    let destination = "\nDestination: " + document.form.destination.value;
    let dietary = [];
    let diet = document.form.diet;    
    for (i =0; i < diet.length; i ++){
            if (diet[i].checked){
                dietary.push(diet[i].value)
            }
        }
    let dietaryRestrictions = "\nDietary Restrictions: " + dietary;
    let values = [fName, lname, age, gender, destination, dietaryRestrictions]
    alert(fName + lname + age + gender + destination + dietaryRestrictions)

})