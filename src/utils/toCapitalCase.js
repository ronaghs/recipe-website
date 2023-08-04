//Takes in a string, splits the string into seperate words, capitalizes the first letter of each word and concatenates that
//letter back together with the rest of the word. Finally, the words are joined together into a single string.
//Purpose: Have properly capetilzied titles for various pages

export function toCapitalCase(str) {
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
