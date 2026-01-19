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
		 const description = card.querySelectorAll('p')[1]?.innerHTML || '';
		 const tools = card.querySelectorAll('p')[0]?.innerHTML || '';
		 const links = card.querySelectorAll('p')[2]?.innerHTML || '';
 
		 modalImage.src = image;
		 modalTitle.textContent = title;
		 modalDescription.innerHTML = description;
		 modalTools.innerHTML = tools;
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
 