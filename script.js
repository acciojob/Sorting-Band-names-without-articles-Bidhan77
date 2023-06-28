//your code here

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
	for (let i = 0; i < encodedStr.length; i++) {
	let char = encodedStr[i];
    let decodedChar = lookup[char] || char;
    decodedArr.push(decodedChar);
  }

  return decodedArr.join("");
}