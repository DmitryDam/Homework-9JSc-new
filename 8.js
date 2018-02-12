// https://learn.javascript.ru/template-lodash
const lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./",
  space: "space"
};

const html = document.querySelector("#template").textContent.trim();
console.log(html); 
// В результате мы видим в консоли то как в 
// переменную html записан обычный форматированый текст.

const compiled = _.template(html);
// Вызов _.template(str) разбивает строку str по разделителям и,
// при помощи new Function создаёт на её основе JavaScript-функцию.
// Тело этой функции создаётся таким образом, что код, который 
// в шаблоне оформлен как <% ... %> – попадает в неё «как есть»,
// а переменные и текст прибавляются к специальному временному
// «буферу», который в итоге возвращается.

const result = compiled(lang);

const container = document.querySelector("#container");

container.innerHTML = result;

       // Метод Array.from() создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.
const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
keys.push(' ');

let callback = (event) => {
	for (let i=0; i<keys.length; i++) {
		if (event.key == keys[i]) {

			if (event.key == buttons[i].innerHTML || event.key == ' ') {

				buttons[i].classList.add("keyboard__btn--active");
				setTimeout(() => {
			      buttons[i].classList.remove("keyboard__btn--active");
			    }, 500);
			}
		}
	}
}
console.log (event);
window.addEventListener("keydown", callback);