const passwordGenerator = require('generate-password');

const password = passwordGenerator.generate({
    length: 8,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });
  
  console.log('Generated Password:', password);