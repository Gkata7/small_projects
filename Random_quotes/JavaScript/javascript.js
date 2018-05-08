var quotes = [
  "Create unselfishness as the most important team attribute",
  "How good can we expect to be if our best player is not our best teammate",
  "What do you do with a mistake: recognize it, admit it, learn from it, forget it",
  "Good players want to be coached… Great players want to be told the truth",
  "It’s not about any one person. You’ve got to get over yourself and realize that it takes a group to get this thing done",
  "The best teams play for each other, not with each other",
  "What type of teammates do you want to play with? Be that teammate yourself",
  "It’s OK to make mistakes. That’s how we learn. When we compete, we make mistakes",
  "Success doesn’t stop when you get there",
  "If you run into a wall, don’t turn around and give up. Figure out how to climb it, go through it, or work around it",
  "Always keep an open mind and a compassionate heart",
  "Anything can happen with hard work and dedication"
];
var authors = ["Bill Russell", "Brad Stevens", "Dean Smith", "Doc Rivers", "Gregg Popovich", "Jeff Van Gundy", "John Calipari", "Kareem Abdul-Jabbar", "Michael Jordan", "Michael Jordan", "Phil Jackson", "Jerry West"];

function getQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var randomNumber = Math.floor(Math.random() * (authors.length));
  document.getElementById("displayQuote").innerHTML = quotes[randomNumber];
  document.getElementById("displayAuthor").innerHTML = authors[randomNumber];
}
