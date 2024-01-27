function searchForCharacterClasses(string, characterClass) {
  // Create a regular expression to match the specified character class.
  const regex = new RegExp(`[${characterClass}]`, "g");

  // Find all the matches in the string.
  const matches = string.matchAll(regex);

  // Return the matches.
  return matches;
}
// Find all the digits in a string.
const digits = searchForCharacterClasses("Hello, world! 12345", "0-9");

// Find all the uppercase letters in a string.
const uppercaseLetters = searchForCharacterClasses(
  "Hello, world! 12345",
  "A-Z"
);

// Find all the lowercase letters in a string.
const lowercaseLetters = searchForCharacterClasses(
  "Hello, world! 12345",
  "a-z"
);

// Find all the special characters in a string.
const specialCharacters = searchForCharacterClasses(
  "Hello, world! 12345",
  "!@#$%^&*()-+={}[]|\\;:'\"<>,.?"
);

const digitsAndUppercaseLetters = searchForCharacterClasses(
  "Hello, world! 12345",
  "0-9A-Z"
);
