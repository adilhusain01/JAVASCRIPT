//Map method
//returns a new array
//not changes size of original array (unlike filter)
//uses values from original array for making a new one

const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "andrew",
    age: 24,
    position: "hr",
  },
  {
    name: "elon",
    age: 69,
    position: "fucker",
  },
];

const ages = people.map((person) => {
  return person.age;
});

console.log(ages);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});

console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);

const result = document.querySelector("#result");
result.innerHTML = names.join('');
