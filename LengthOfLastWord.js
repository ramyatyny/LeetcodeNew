let s = "Hello World";
var lengthOfLastWord = function(s) {
  const letter = s.trim().split(" ");
  return letter.length > 0 ? letter[letter.length - 1].length : 0;
};