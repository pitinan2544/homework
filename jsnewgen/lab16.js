function getUserData({ firstName, favoriteColor = 'green' }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
   }
   getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
   getUserData({ firstName: 'Melissa' }); // **
   getUserData({}); // ***
   

// สำหรับการเรียก getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); 
//ค่าที่ได้คือ "Your name is Alejandro and you like purple" เนื่องจากมีการระบุ favoriteColor ไว้ใน object ที่ส่งเข้าไป.
// สำหรับการเรียก getUserData({ firstName: 'Melissa' }); 
//ค่าที่ได้คือ "Your name is Melissa and you like green" เนื่องจากไม่ได้ระบุค่า favoriteColor จึงใช้ค่า default ที่กำหนดไว้คือ 'green'.
// สำหรับการเรียก getUserData({}); 
//ค่าที่ได้คือ "Your name is undefined and you like green" เนื่องจากไม่ได้ระบุค่า firstName และ favoriteColor จึงให้ค่า default ทั้งสอง.