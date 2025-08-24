const answers = [
	"Yes",
	"No",
	"Maybe",
	"Ask again",
	"Definitely",
	"Unlikely",
	"Without a doubt",
	"Cannot predict now"
 ];
 
 const questionInput = document.getElementById("question");
 const askBtn = document.getElementById("askBtn");
 const ball = document.getElementById("ball");
 const answerText = document.getElementById("answer");
 
 function getRandomAnswer() {
	return answers[Math.floor(Math.random() * answers.length)];
 }
 
 function askQuestion() {
	const question = questionInput.value.trim();
	if (!question) return;
 
	// Clear previous answer
	answerText.textContent = "";
	ball.classList.remove("show-answer");
 
	// Start shake animation
	ball.classList.add("shake");
 
	ball.addEventListener("animationend", () => {
	  const answer = getRandomAnswer();
	  answerText.textContent = answer;
 
	  ball.classList.remove("shake");
	  ball.classList.add("show-answer");
	}, { once: true });
 }
 
 // Event listeners
 askBtn.addEventListener("click", askQuestion);
 questionInput.addEventListener("keypress", (e) => {
	if (e.key === "Enter") askQuestion();
 });
 