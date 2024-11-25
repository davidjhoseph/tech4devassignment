class User {
  constructor({name, age, school}) {
    this.name = name;
    this.age = age;
    this.school = school;
  }
  name;
  age;
  school;
  greet = () => {
    return 'Hello, ' + this.name
  }
}
const david = new User({name: 'david', age: 50, school: 'Unilag'});
console.log(david);

class UserWithMasters extends User {
  constructor({name, age, school, schoolAttendedMasters}) {
    console.log(name)
    super({name, age, school});
    this.schoolAttendedMasters = schoolAttendedMasters;
  }

  haveMasters = true;
  schoolAttendedMasters;
}

// const user = new User('David', 50, 'school')
const user2 = new User({name: 'David', age: 50, school: 'school'});

const esther = new UserWithMasters({
  name: "Esther",
  age: 20,
  school: "Uniben",
  schoolAttendedMasters: 'Oxford University',
});

console.log(esther);

