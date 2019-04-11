var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var count = 0;
console.log("     List of ingredients using a while loop:");
while (ingredients.length > count){
  console.log(ingredients[count]);
  count++;
}
// Write a for loop that prints out the contents of ingredients:
console.log("     Now with for loop:");
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("     Now backwards:");
for (var j = ingredients.length - 1 ; j >= 0; j--) {
  console.log(ingredients[j]);
}