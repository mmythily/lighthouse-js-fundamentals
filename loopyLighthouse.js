var start = 100;
var end = 200;
for (var i = start; i <= end; i++) {
  if ((i % 3 === 0) && (i % 4 === 0)){
    console.log("LoopyLighthouse")
  } else if (i % 4 === 0){
    console.log("Lighthouse")
  } else if (i % 3 === 0){
    console.log("Loopy")
  } else {
    console.log(i);
  }
}

