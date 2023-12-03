let user = {
    name: 'John',
    years: 27
   };
   
   let { name, years: age, isAdmin = false } = user;
   
   console.log(name); // 'John'
   console.log(age); // 27
   console.log(isAdmin); // false
   