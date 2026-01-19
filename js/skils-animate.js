/* --animate stuck section */

const options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.2,
}

const callback = (entries, observer) => {
	entries.forEach(entry => {
		const currentElement = entry.target
		if (entry.isIntersecting) {
			currentElement.classList.add('--animate')
		} else {
			currentElement.classList.remove('--animate')
		}
	})
}

document.querySelectorAll('.stack__item').forEach((el, i) => {
	el.style.setProperty('--i', i);
 });
 
const observer = new IntersectionObserver(callback, options)

const animElements = document.querySelectorAll('[class*="--anim"]')
animElements.forEach (animElement => {
	observer.observe(animElement)
})
