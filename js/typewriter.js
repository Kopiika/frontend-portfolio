/* printing text in Hero section */
const phrases = [
	"Junior web developer 💻",
	"Focused on frontend 🎯",
	"Lifelong learner ☕️",
	"UI/UX design enthusiast 🎨"
 ];
 
 const el = document.getElementById("typewriter-text");
 let phraseIndex = 0;
 let letterIndex = 0;
 let isDeleting = false;
 
 function type() {
	const currentPhrase = Array.from(phrases[phraseIndex]);
	
	if (isDeleting) {
	  letterIndex--;
	} else {
	  letterIndex++;
	}
 
	el.textContent = currentPhrase.slice(0, letterIndex).join("");
 
	let speed = isDeleting ? 40 : 100;
 
	if (!isDeleting && letterIndex === currentPhrase.length) {
	  speed = 1200; // pause before erasing
	  isDeleting = true;
	} else if (isDeleting && letterIndex === 0) {
	  isDeleting = false;
	  phraseIndex = (phraseIndex + 1) % phrases.length;
	  speed = 500; // Pause before the next phrase
	}
 
	setTimeout(type, speed);
 }
 
 type();