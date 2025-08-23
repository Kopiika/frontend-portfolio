"use strict"


/*dark and light theme*/
window.addEventListener("load", windowLoad);

function windowLoad() {
	const htmlBlock = document.documentElement;

	const saveUserTheme = localStorage.getItem('user-theme');

	let userTheme;
	if (window.matchMedia) {
		userTheme = window.matchMedia('(prefers-colorsheme: dark)').matches ? 'dark' : 'light';
	}
	window.matchMedia('(prefers-colorsheme: dark)').addEventListener('change', e => {
		!saveUserTheme ? changeTheme() : null;
	});

	const themeButton = document.querySelector('.page__theme');
	if (themeButton) {
		themeButton.addEventListener("click", function (e) {
			changeTheme(true);
		})
	}

	function setThemeClass() {
		if(saveUserTheme) {
			htmlBlock.classList.add(saveUserTheme)
		} else {
			htmlBlock.classList.add(userTheme);
		}
	}

	setThemeClass();

	function changeTheme(saveTheme = false) {
		let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
		let newTheme;

		if (currentTheme === 'light') {
			newTheme = 'dark';
		} else if (currentTheme === 'dark') {
			newTheme = 'light';
		}
		htmlBlock.classList.remove(currentTheme);
		htmlBlock.classList.add(newTheme);
		saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
	}
}


/* modal in projects section*/
document.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('project-modal');
	const modalImage = modal.querySelector('.modal__image');
	const modalTitle = modal.querySelector('.modal__title');
	const modalDescription = modal.querySelector('.modal__description');
	const modalTools = modal.querySelector('.modal__tools');
	const modalLinks = modal.querySelector('.modal__links');
	const closeBtn = modal.querySelector('.modal__close');
	const overlay = modal.querySelector('.modal__overlay');
 
	const projectCards = document.querySelectorAll('.project-card');
 
	projectCards.forEach(card => {
	  card.addEventListener('click', () => {
		 const image = card.querySelector('img')?.src;
		 const title = card.querySelector('h3')?.textContent;
		 const description = card.querySelectorAll('p')[1]?.textContent || '';
		 const tools = card.querySelectorAll('p')[0]?.textContent || '';
		 const links = card.querySelectorAll('p')[2]?.innerHTML || '';
 
		 modalImage.src = image;
		 modalTitle.textContent = title;
		 modalDescription.textContent = description;
		 modalTools.textContent = tools;
		 modalLinks.innerHTML = links;
 
		 modal.style.display = 'block';
		 document.body.style.overflow = 'hidden';
	  });
	});
 
	const closeModal = () => {
	  modal.style.display = 'none';
	  document.body.style.overflow = '';
	};
 
	closeBtn.addEventListener('click', closeModal);
	overlay.addEventListener('click', closeModal);
 });
 
/* Smooth scrolling */
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function (e) {
	  e.preventDefault();
 
	  const targetId = this.getAttribute("href").substring(1);
	  const target = document.getElementById(targetId);
 
	  const header = document.getElementById("site-header");
	  const headerHeight = header.offsetHeight;
 
	  const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
 
	  window.scrollTo({
		 top: targetPosition,
		 behavior: "smooth"
	  });
	});
 });
 
 
 /* Scroll to Top Button */
 const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* Menu Burger */

const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");
const header = document.getElementById("site-header");

if (header && navMenu){
	burger.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	 });
}


//counting header hight
function setMenuTopOffset() {
  const headerHeight = header.offsetHeight;
  navMenu.style.top = `${headerHeight}px`;
}

window.addEventListener("load", setMenuTopOffset);
window.addEventListener("resize", setMenuTopOffset);


 // Close the menu when clicking outside the menu and burger
document.addEventListener('click', (event) => {
	if (navMenu.classList.contains('active')) {
	  if (!navMenu.contains(event.target) && !burger.contains(event.target)) {
		 navMenu.classList.remove('active');
	  }
	}
 });

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

		setTimeout(() => {
			errorMessage.classList.remove("show");
		}, 3000);
	} else {
		errorMessage.classList.remove("show");
	}
  } 
);