const animals = [
	{ id:1, name: "Kettu", type: "Nisäkäs" },     
	{ id:2, name: "Karhu", type: "Nisäkäs" },     
	{ id:3, name: "Haukka", type: "Lintu" },      
	{ id:4, name: "Käärme", type: "Matelija" },   
	{ id:5, name: "Susi", type: "Nisäkäs" },      
	{ id:6, name: "Pöllö", type: "Lintu" },       
	{ id:7, name: "Lisko", type: "Matelija" },
	{ id:8, name: "Sammakko", type: "Sammakkoeläin" },
	{ id:9, name: "Etana", type: "Selkärangaton" },
	{ id:10, name: "Lohi", type: "Kala" }
];

//функція оновлення тварин на сторінці
function render (list = animals) {
	const ul = document.getElementById("animalList");
	ul.innerHTML = "";
	list.forEach((animal) =>{
		const li = document.createElement("li");
		li.textContent =`Eläimen: ${animal.name}, type: ${animal.type}`;
		// Кнопка Видалити тварину
		const delBtn = document.createElement("button");
		delBtn.textContent = `Poista`;
		delBtn.addEventListener("click", () =>{
			// Видалення по id
			const index = animals.findIndex(a => a.id === animal.id);
			if (index> -1) {
				animals.splice(index,1);//Видаляє 1 елемент з масиву animals, починаючи з index; 
				render();
			}
		})
		li.appendChild(delBtn);
		ul.appendChild(li);
	})
};
render();
// .findIndex(...) — шукає індекс першого елемента, який задовольняє умову. a => a.id === animal.id — перевіряє, чи id поточної тварини (a) дорівнює id тієї, яку треба видалити. Якщо знаходить — повертає індекс (наприклад, 3). Якщо не знаходить — повертає -1.


// додавання тварин в список при насканні кнопки
document.getElementById("addAnimal_btn").addEventListener("click", (e) =>{
	const name = document.getElementById("animalName").value.trim();
	const type = document.getElementById("animalType").value;
	if (!name || !type) return;
	// Генеруємо унікальний id через час
	const id = Date.now();
	animals.push({id, name, type});
	render();
	//очищує поля форми
	document.getElementById("animalName").value = "";
	document.getElementById("animalType").value = "";
})


// фільтр за типом
document.getElementById("filterType").addEventListener("change", () =>{
	const selected = document.getElementById("filterType").value;
	if (selected === "Kaikki") {
		render();
	} else {
		const filtered = animals.filter(a => a.type === selected);
		render(filtered);
	}
});
//a => a.type === selected Це стрілкова функція (arrow function). Вона означає: для кожного об'єкта a в масиві animals перевір, чи його type дорівнює selected. Якщо так — залиш його у новому масиві filtered.


// пошук за введенними символами
document.getElementById("search-field").addEventListener("keyup", (e) =>{
	const enteredChar = document.getElementById("search-field").value.trim().toLowerCase();
	const results = animals.filter(animal => animal.name.toLowerCase().includes(enteredChar));
	if (results.length > 0){
		render(results);
	} else {
		const ul = document.getElementById("animalList");
		ul.innerHTML = "<li>Eläimiä ei löytynyt.</li>"
	}
})

// сортування за іменем
let ascending = true;// початковий стан — за зростанням
const sortBtn = document.getElementById("sort_btn");
sortBtn.addEventListener("click", () => {
	if (ascending) {
		animals.sort((a,b) => a.name.localeCompare(b.name, "fi"));
		sortBtn.textContent = "Järjestä Ö-A";
	} else {
		animals.sort((a,b) => b.name.localeCompare(a.name, "fi"));
		sortBtn.textContent = "Järjestä A-Ö";
	}	
	ascending = !ascending; // змінюємо напрямок сортування
	render();
});


