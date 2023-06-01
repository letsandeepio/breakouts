// You are provided with an array containing individual student data in the form of objects. Each object contains
// 1. name -  a string specifying student name
// 2. Student Hobbies - an array containing strings specifying student's hobbies

// TODO: Write a function that returns an array of hobbies
// TODO: Ensure there are no duplicate values in the array

// sample input

const sampleStudentsData = [
  {
    name: "Charlie",
    hobbies: ["Rock Climbing", "Running", "Board Games", "Playing football"],
  },
  {
    name: "Skylar",
    hobbies: ["Rock Climbing", "Boxing"],
  },
  {
    name: "Kao",
    hobbies: ["Rock Climbing", "Sky Diving"],
  },
];

// sample output

const output = [
  "Rock Climbing",
  "Running",
  "Board Games",
  "Playing football",
  "Boxing",
  "Sky Diving",
];

// * To create a function that takes in the studentsData array
// * Create an empty array to store the unique hobbies
// * Loop over each student object in the studentsData Array
// * I have retrieve the given students hobbies
// * Then loop through each student hobbies
// * check if the hobby exists in the output array or not
// * if exists do nothing else push to the output
// * return the array

const getUniqueHobbies = (studentsData) => {
  const uniqueHobbies = [];

  for (const student of studentsData) {
    const hobbies = student.hobbies;
    for (const hobby of hobbies) {
      if (hobby does not exist in uniqueHobbies) {
        uniqueHobbies.push(hobby);
      }
    }
  }

  return uniqueHobbies;
};

console.log(getUniqueHobbies(sampleStudentsData));
