//interface is nothing but when you are creating an object it is diffficult to define  what kind of data will be stored inside that object. 
//So we globally declare the types initially. 
var greet = function (person) {
    return "Hey, " + person.name + "glad you are " + person.age + " years old";
};
console.log(greet({ name: "Chaitanya", age: 23 }));
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.greeting = function () {
        return "Hey, " + this.name + "glad you are " + this.age + " years old";
    };
    return Employee;
}());
var emp = new Employee("John Doe", 30);
console.log(emp.greeting());
