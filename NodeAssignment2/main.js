const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a word to capitalize: ', async (word) => {
  if (word.trim()) {
    const { capitalize } = await import('./stringUtils.js');
    console.log('Capitalized Word:', capitalize(word));
  } else {
    console.log('No word entered.');
  }
  rl.close();
});
