"use strict"

document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("form");
	form.addEventListener("submit", reading);

	function reading(e) {
		e.preventDefault();
		let formData = new FormData(form);

		const text = formData.get("text");
		const speed = formData.get("speed");
		const interval = Math.round(60000 / +speed);

		const currentWord = document.querySelector(".screen-reading__current-word");
		const words = text.split(' ');

		let i = 0;
		let changeWord = setInterval( () => {
			currentWord.innerHTML = `<p>${words[i++]}</p>`;

			if (i == words.length) { clearInterval(changeWord) };

			document.getElementById('btn-stop').onclick = function () {
				clearInterval(changeWord);
				currentWord.innerHTML = `<p>Екран для читання</p>`

				document.getElementById('btn-start').classList.toggle('hidden');
				document.getElementById('btn-stop').classList.toggle('hidden');
			};

		}, interval );
	};

	document.getElementById('btn-start').onclick = () => {
		document.getElementById('btn-start').classList.toggle('hidden');
		document.getElementById('btn-stop').classList.toggle('hidden');
	};
});