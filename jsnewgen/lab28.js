const users = [
    { user: "Name1" },
    { user: "Name2", age: 2 },
    { user: "Name2" },
    { user: "Name3", age: 4 }
  ];
  
  for (const { user, age = "unknown" } of users) {
    console.log(`${user} - Age: ${age}`);
  }
//   Name1 - Age: unknown
//   Name2 - Age: 2
//   Name2 - Age: unknown
//   Name3 - Age: 4
    