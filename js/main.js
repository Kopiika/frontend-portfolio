import "./theme.js";
import "./typewriter.js";
import "./skils-animate.js";
import "./modal.js";
import "./contacts-form.js";
import "./menu.js";


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
 
 
 


 
 
 
