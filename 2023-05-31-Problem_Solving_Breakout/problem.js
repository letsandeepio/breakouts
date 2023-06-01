// In a company, there are multiple teams, and each team has several members. The company has collected data about team collaborations in the following format:

const collaborations = [
  { team: "X", member: "Michael" },
  { team: "Y", member: "Sophia" },
  { team: "X", member: "Daniel" },
  { team: "Z", member: "Sophia" },
  { team: "Y", member: "Emily" },
  { team: "Z", member: "Daniel" },
  { team: "X", member: "Michael" },
  { team: "Z", member: "Oliver" },
];

// Using the same data as above, write a function that generates a data structure similar to the one shown below. This data structure should list each member and their corresponding list of teams they have collaborated with.

// edge case: duplicate data

// object with each team member name and value as an array of teams they were on

// const output = {
//   [memberName]: [strings, strings],
// };

const expectedOutput = {
  Michael: ["X"],
  Sophia: ["Y", "Z"],
  Daniel: ["X", "Z"],
  Emily: ["Y"],
  Oliver: ["Z"],
};

// Problem solving
// Create an empty output object
// for of loop is for arrays
// grab the member name -> dynamic
//        using dot notation
// create a key inside our object using bracket notation
// initialize it with empty array
// grab the team name and push it to the empty array
// return the output object

const getCollaborations = (collaborationData) => {
  const output = {};

  for (const collaboration of collaborationData) {
    // object destructing
    const { team, member } = collaboration;

    if (!output[member]) {
      output[member] = [];
    }

    if (!output[member].includes(team)) {
      output[member].push(team);
    }
  }

  return output;
};

console.log(getCollaborations(collaborations));
