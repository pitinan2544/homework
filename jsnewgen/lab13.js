let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers); // *
// ค่าของ numbers ตอนนี้กลายเป็น [10, 30, 20] ซึ่งค่าที่อยู่ที่ตำแหน่งที่ 1 และ 2 ถูกสลับค่ากันจากเดิม.