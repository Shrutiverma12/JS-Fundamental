function outerFunction(x) {
  let a = 10;
  function innerFunction() {
    return a + x;
  }
  return innerFunction();
}

console.log(outerFunction(9));
