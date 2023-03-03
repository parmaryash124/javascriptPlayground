for (let i = 0; i < 5; i++) {
  // console.log(i)
  setTimeout(() => {
    console.log(i);
  }, 2000);
}

for (var i = 0; i < 5; i++) {
  // console.log(i)
  setTimeout(() => {
    console.log(i);
  }, 2000);
}
for (var i = 0; i < 5; i++) {
  // console.log(i)

  function test(i) {
    setTimeout(() => {
      console.log(i);
    }, 2000);
  }
  test(i);
}
for (var i = 0; i < 5; i++) {
  // console.log(i)
//iife 
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 2000);
  })(i);
}
