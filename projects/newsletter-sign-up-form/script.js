document.getElementById("form").addEventListener("submit", function(event){
	const username = document.getElementById("username").value.trim();
	const usersorname = document.getElementById("usersorname").value.trim();
	const email = document.getElementById("email").value.trim();
	const password = document.getElementById("password").value.trim();
	const passwordRepeat = document.getElementById("passwordRepeat").value.trim();
	const errorMessage = document.getElementById("errorMessage");

	if (username === "" || usersorname === ""|| email === "" || password === "" || passwordRepeat === "" ) {
		event.preventDefault(); // Не відправляти форму
		errorMessage.textContent = "Form fields cannot be empty!";
		errorMessage.classList.add("show");

		// Зникає через 3 секунди
		setTimeout(() => {
			errorMessage.classList.remove("show");
		}, 3000);
	} else if (password !== passwordRepeat) {
		event.preventDefault();
		errorMessage.textContent = "Passwords do not match!";
		errorMessage.classList.add("show");

		setTimeout(() => {
			errorMessage.classList.remove("show");
		}, 3000);
	} else {
		errorMessage.classList.remove("show");
	}
  } 

)