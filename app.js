const fs = require('fs');

const genders = ['Female', 'Male'];
const femaleNames = ['Olivia', 'Amelia', 'Isla', 'Ava', 'Ivy', 'Freya', 'Lily', 'Florence', 'Mia', 'Willow'];
const maleNames = ['Noah', 'Oliver', 'George', 'Arthur', 'Muhammad', 'Leo', 'Harry', 'Oscar', 'Archie', 'Henry'];
const lastNames = ['García', 'Martin', 'Müller', 'Rodríguez', 'Fernández', 'John', 'Smith', 'Peter', 'Thomas', 'James'];
const email = ['gmail.com', 'onet.pl', 'yahoo.com', 'wp.pl', 'onet.eu'];
const people = [];

const randChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const randNumberPhone = () => {
  const phone = [];

  for (let i = 0; i < 9; i++) {
    if (i === 0) {
      phone.push(Math.floor(Math.random() * (9 - 5) + 5));
    } else {
      phone.push(Math.floor(Math.random() * (9 - 0) + 0));
    };
  };

  return phone.join('');
};

const randEmail = (name, lastName) => {
  const preparingEmail = `${name.toLowerCase()}.${lastName.toLowerCase()}@${randChoice(email)}`;
  return preparingEmail.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

for (let i = 0; i < 20; i++) {
  const person = {};
  
  person.id = i + 1; 
  person.gender = randChoice(genders);
  
  if (person.gender === 'Female') {
    person.firstName = randChoice(femaleNames);
  } else if (person.gender === 'Male') {
    person.firstName = randChoice(maleNames);
  };

  person.lastName = randChoice(lastNames);
  person.age = Math.floor(Math.random() * (100 - 18) + 18);

  const preparingEmail = `${person.firstName.toLowerCase()}.${person.lastName.toLowerCase()}@${randChoice(email)}`;
  person.email = preparingEmail.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  person.numberPhone = randNumberPhone();
  person.email = randEmail(person.firstName, person.lastName);

  people.push(person);
};

const jsonData = JSON.stringify(people, null, 2);

fs.writeFile('people.json', jsonData, (err) => {
  if (err) {
    console.log('Failed to save data');
  } else {
    console.log('Data was saved correctly');
  };
});