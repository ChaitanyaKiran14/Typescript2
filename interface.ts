//interface is nothing but when you are creating an object it is diffficult to define  what kind of data will be stored inside that object. 
//So we globally declare the types initially. 

interface Person{
    name : string,
    age : number,
    
}

const greet = (person : Person) => {
    return "Hey, " + person.name + "glad you are " + person.age + " years old"
}


console.log(greet({name : "Chaitanya", age : 23}))

//interface is a Java Concept. Classes implements Interfaces . Implementation means  whatever properties you said this interface will have, this class needs to have as well.
//You can also define functions in interface.

interface Person2 {
    name : string,
    age : number,
    

}

class Employee implements Person2 {

    name : string
    age : number

    constructor(name : string, age : number){
        this.name = name
        this.age = age
    }

    greeting() {
        return "Hey, " + this.name + "glad you are " + this.age + " years old"
    }

}

const  emp = new Employee("John Doe",  30);
console.log(emp.greeting())

