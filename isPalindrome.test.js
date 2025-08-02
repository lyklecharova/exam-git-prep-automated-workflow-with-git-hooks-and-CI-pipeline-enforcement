const isPalindrome = require("./isPalindrome");
test('"racecar" should be a palindrome', () => {
  expect(isPalindrome("racecar")).toBe(true);
});
test('"hello" should not be a palindrome', () => {
  expect(isPalindrome("hello")).toBe(false);
});
test('"A man, a plan, a canal: Panama" should be a palindrome', () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});
