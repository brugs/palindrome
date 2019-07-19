module.exports = Phrase;

// Add `reverse` to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

 // Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Process contnt for palindrome testing.
  this.processor = function processor(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }

  // Returns the letters in the content.
  this.letters = function letters() {
    return (this.content.match(/[a-z]/ig) || []).join("");
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  // Returns the phrase LOUDER.
  this.louder = function louder() {
    return this.content.toUpperCase();
  }
}
