// Funcionize 8 Ball code

// Event listner
document.getElementById("enter").addEventListener("click", eightBall);

//HTML Variables
let input = document.getElementById("input");
let answer = document.getElementById("answer");
// Event function
function eightBall() {
  let question = document.getElementById("question").value;
  question = question.toLowerCase();
  rand = Math.random();
  console.log(rand);

  if (question == "") {
    answer.innerHTML = "Please ask your question...";
  } else if (question == "does the magic 8 ball actually work?") {
    answer.innerHTML = "How dare you doubt me!";
  } else if (question == "does the magic 8 ball work?") {
    answer.innerHTML = "How dare you doubt me!";
  } else if (question == "is the magic 8 ball real?") {
    answer.innerHTML = "How dare you doubt me!";
  } else if (question == "the magic 8 ball is fake?") {
    answer.innerHTML = "How dare you doubt me!";
  } else if (rand < 0.2) {
    answer.innerHTML = "Without a Doubt.";
  } else if (rand < 0.4) {
    answer.innerHTML = "As I see it, yes.";
  } else if (rand < 0.6) {
    answer.innerHTML = "Concntrate and Ask again.";
  } else if (rand < 0.8) {
    answer.innerHTML = "Don't count on it.";
  } else {
    answer.innerHTML = "Outlook not so good.";
  }
}

// question == "the magic 8 ball is fake?"
