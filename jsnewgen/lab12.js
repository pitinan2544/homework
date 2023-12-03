let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    'Raindrops on roses',
    'whiskers on kittens',
    'Bright copper kettles',
    'warm woolen mittens',
   ];
   console.log(raindrops); // *
   console.log(whiskers); // **
   console.log(aFewOfMyFavoriteThings); // ***

// raindrops จะมีค่าเป็น "Raindrops on roses" ซึ่งเป็นค่าในตำแหน่งแรกของ array.
// whiskers จะมีค่าเป็น "whiskers on kittens" ซึ่งเป็นค่าในตำแหน่งที่สองของ array.
// aFewOfMyFavoriteThings จะมีค่าเป็น ['Bright copper kettles', 'warm woolen mittens'] 
//ซึ่งเป็น array ที่เหลือหลังจากตำแหน่งที่สองของ array ถูก destructured ไปให้กับ raindrops และ whiskers.