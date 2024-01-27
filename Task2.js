function isMatch(pattern, text) {
  var regex = new RegExp(pattern);
  return regex.test(text);
}

// Example usage:
var pattern1 = /\d+/;
var text1 = "12345";
console.log(isMatch(pattern1, text1));

var pattern2 = /[a-zA-Z]+/;
var text2 = "HelloWorld";
console.log(isMatch(pattern2, text2));

var pattern3 = /\s/;
var text3 = "This has spaces";
console.log(isMatch(pattern3, text3));

var pattern4 = /\d+/;
var text4 = "NoDigitsHere";
console.log(isMatch(pattern4, text4));
