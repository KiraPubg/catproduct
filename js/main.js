const cards = document.querySelectorAll(".card__wrapper");

cards.forEach((el, idx, arr) => {
	el.addEventListener("click", () => {
		if (!el.classList.contains("disabled")) {
			el.classList.toggle("selected")
		}
	})
})