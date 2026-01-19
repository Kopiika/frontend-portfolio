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
