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


 //Close the menu when clicking outside the menu and burger
document.addEventListener('click', (event) => {
	// If the menu is open
	if (navMenu.classList.contains('active')) {
	  // Check if the click was NOT on the menu and NOT on the burger
	  if (!navMenu.contains(event.target) && !burger.contains(event.target)) {
		 navMenu.classList.remove('active');
	  }
	}
 });