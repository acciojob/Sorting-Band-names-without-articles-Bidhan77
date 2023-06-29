let bandNames = ['The Beatles', 'Led Zeppelin', 'Red Hot Chili Peppers', 'The Rolling Stones', 'Aerosmith'];

// Function to remove articles from the band names
function removeArticles(name) {
  const articles = ['a', 'an', 'the'];
  const words = name.split(' ');

  // Remove articles from the band name
  const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));

  return filteredWords.join(' ');
}

// Sort the band names in lexicographic order excluding articles
bandNames.sort((a, b) => {
  const nameA = removeArticles(a);
  const nameB = removeArticles(b);
  return nameA.localeCompare(nameB);
});

// Display the sorted band names inside the <ul id="band"> tag
const ulElement = document.getElementById('band');
for (let i = 0; i < bandNames.length; i++) {
  const liElement = document.createElement('li');
  liElement.textContent = bandNames[i];
  ulElement.appendChild(liElement);
}
