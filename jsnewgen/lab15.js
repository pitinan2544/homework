let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
   };
let { numPlanets, ...discoveryYears } = planetFacts;
//    console.log(discoveryYears); // *
//    ในบรรทัด let { numPlanets, ...discoveryYears } = planetFacts;, numPlanets จะถูกกำหนดค่าเป็น 8 (ค่าที่อยู่ใน property numPlanets ของ planetFacts) และ ...discoveryYears 
//    จะเป็นตัวแปรที่รับค่าที่เหลือทั้งหมดใน object planetFacts ที่ไม่ได้ถูก destructured ไปให้กับ numPlanets 
//    ซึ่งในที่นี้คือ { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }.
//    ดังนั้น, console.log(discoveryYears); จะแสดงค่าของ discoveryYears ซึ่งเป็น object ที่ประกอบด้วยข้อมูลการค้นพบปีของดาวโน๊ตและดาวอังคาร.