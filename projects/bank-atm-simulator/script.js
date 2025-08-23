const correctPassword = 1234;

function checkPassword (){
	const passwordInput = document.getElementById("passwordInput").value;
	const errorMessage = document.getElementById("error-message");
	if (parseInt(passwordInput) === correctPassword) {
		// If the password is correct, hide the modal window and show the form
		document.getElementById("passwordModal").style.display = "none";
		document.getElementById("bankApp").style.display = "block";
  } else {
		// If the password is incorrect, we display an error
		errorMessage.textContent = "Väärä PIN-koodi. Yritä uudelleen.";
  }
}


let balance = 0;

// Function to update balance on the page
function updateBalance () {
	document.getElementById("balanceAmount").textContent = balance;
}

function deposit (){
	let amount = parseFloat(document.getElementById("depositAmount").value);
	if (isNaN(amount) || amount <= 0) {
		document.getElementById("errorMessage").textContent = "Syötä oikea talletussumma.";
		return;
	}

	balance += amount;
	updateBalance();
	document.getElementById("errorMessage").textContent = "";
	document.getElementById("depositAmount").value = ""; 
}

function withdraw () {
	let amount = parseFloat(document.getElementById("withdrawAmount").value);
	if (isNaN(amount) || amount <= 0) {
		document.getElementById("errorMessage").textContent = "Syötä oikea nostosumma.";
		return;
	}

	if (amount > balance){
		document.getElementById("errorMessage").textContent = "Tilillä ei ole tarpeeksi varoja.";
		return;
	}

	balance -= amount;
	updateBalance();
	document.getElementById("errorMessage").textContent = "";
	document.getElementById("withdrawAmount").value = ""; 
}


document.getElementById("depositButton").addEventListener("click", deposit);
document.getElementById("withdrawButton").addEventListener("click", withdraw);

