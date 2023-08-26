let filterButtons = document.querySelectorAll(".filter button");
let filterCards = document.querySelectorAll(".filterable-cards .card");
let Tous = document.getElementById("all");
let html = document.getElementById("html");
let css = document.getElementById("css");
let js = document.getElementById("js");
let c = document.getElementById("c");
let cpp = document.getElementById("c++");
let git = document.getElementById("git");
let urlParams = new URLSearchParams(window.location.search);
let tag = urlParams.get('lang');

function set_lang() {
	if (tag === "html") {
		filterButtons.forEach(button => button.classList.remove("active"));
		html.classList.add("active");
	}
	else if (tag === "css") {
		filterButtons.forEach(button => button.classList.remove("active"));
		css.classList.add("active");
	}
	else if (tag === "js") {
		filterButtons.forEach(button => button.classList.remove("active"));
		js.classList.add("active");
	}
	else if (tag === "c") {
		filterButtons.forEach(button => button.classList.remove("active"));
		c.classList.add("active");
	}
	else if (tag === "cpp") {
		filterButtons.forEach(button => button.classList.remove("active"));
		cpp.classList.add("active");
	}
	else if (tag === "git") {
		filterButtons.forEach(button => button.classList.remove("active"));
		git.classList.add("active");
	}
	else {
		filterButtons.forEach(button => button.classList.remove("active"));
		Tous.classList.add("active");
	}
	filter_hidden();
}

function filter_hidden() {
	let activeFilters = document.querySelectorAll(".filter button.active");
	let activeFiltersArray = Array.from(activeFilters);
	console.log(activeFiltersArray)
	let ArrayLength = activeFiltersArray.length;

	if (ArrayLength === 0) {
		filterCards.forEach(card => card.classList.add("hidden"));
		return ;
	}
	filterCards.forEach(card => {
		card.classList.add("hidden");
		let cardTags = card.dataset.tags.split(" ");
		let cardTagsArray = Array.from(cardTags);

		for (let i = 0; i < ArrayLength; i++) {
			if (activeFiltersArray[i].id === "all") {
				card.classList.remove("hidden");
				return ;
			}
			else if (activeFiltersArray[i].id === "html" && cardTagsArray.includes("html")) {
				card.classList.remove("hidden");
				return ;
			}
			else if (activeFiltersArray[i].id === "css" && cardTagsArray.includes("css")) {
				card.classList.remove("hidden");
				return ;
			}
			else if (activeFiltersArray[i].id === "js" && cardTagsArray.includes("js")) {
				card.classList.remove("hidden");
				return ;
			}
			else if (activeFiltersArray[i].id === "c" && cardTagsArray.includes("c")) {
				card.classList.remove("hidden");
				return ;
			}
			else if (activeFiltersArray[i].id === "c++" && cardTagsArray.includes("c++")) {
				card.classList.remove("hidden");
				return ;
			}
			else if (activeFiltersArray[i].id === "git" && cardTagsArray.includes("git")) {
				card.classList.remove("hidden");
				return ;
			}
			else {
				card.classList.add("hidden");
			}
		}
	});
}

const filter = (e) => {
	if (e.target.classList.contains("active")) {
		e.target.classList.remove("active");
	} else {
		e.target.classList.add("active");
	}
	filter_hidden();
};

set_lang();
filterButtons.forEach(button => button.addEventListener("click", filter));