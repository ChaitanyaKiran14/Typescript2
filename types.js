function greett(person) {
    return "Hello, my name is " + person.name + ", and I am " + person.age + ' years old.';
}
console.log(greett({
    name: "Chaitanya",
    age: 23
}));
