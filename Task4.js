function matchAndExtract(string, pattern) {
  const regex = new RegExp(pattern);
  const match = regex.exec(string);
  if (match) {
    // Extract the captured groups
    const groups = match.groups;
    // Return the extracted groups
    console.log("Matched");
    //return groups;
  } else {
    // Return null if there is no match
    return null;
  }
}
// Extract the day, month, and year from a string in the format "MM/DD/YYYY"
const dateString = "01-01-2024";
const pattern = /\d{1,2}-\d{1,2}-\d{4}/;
const groups = matchAndExtract(dateString, pattern);
console.log(groups); // ["01", "01", "2023"]
