const natural = require('natural');

// Example usage of the 'natural' package
const tokenizer = new natural.WordTokenizer();

const text = "This is an example sentence for sentiment analysis.";
const words = tokenizer.tokenize(text);

console.log('Tokenized words:', words);
const natural = require('natural');
