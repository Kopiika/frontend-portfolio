/* Contacts form */

document.getElementById("contactForm").addEventListener("submit", function(event){
	const username = document.getElementById("username").value.trim();
	const email = document.getElementById("email").value.trim();
	const userMessage =document.getElementById("message").value.trim();
	const errorMessage = document.getElementById("errorMessage");

	if (username === "" || userMessage === ""|| email === "" ) {
		event.preventDefault(); 
		errorMessage.textContent = "Form fields cannot be empty!";
		errorMessage.classList.add("show");

		setTimeout(() => {
			errorMessage.classList.remove("show");
		}, 3000);

	} else {
		errorMessage.classList.remove("show");
	}
  } 
);