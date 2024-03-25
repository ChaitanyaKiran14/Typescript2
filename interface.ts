interface Person{
    name : string,
    age : number
}

const greet = (person : Person) => {
    return "Hey, " + person.name + "glad you are " + person.age + " years old"
}


console.log(greet({name : "Chaitanya", age : 23}))
