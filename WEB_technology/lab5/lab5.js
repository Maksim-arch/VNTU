newPageTitle = 'Lab5 with JS';
document.querySelector('title').textContent = newPageTitle;

document.getElementById("applyJS").onclick = function(){
	document.getElementById("header").innerHTML = "Запрошуємо до нашого магазину"
	document.getElementById("footer").innerHTML = "Повертайтесь до нас"
}
var store = document.querySelector(':root');
function applyCSS(){
	store.style.setProperty('--FloralWhite', 'green');
	store.style.setProperty('--red', 'yellow');
	store.style.setProperty('--green', 'red');
	store.style.setProperty('--powderblue', 'Aqua');
        store.style.setProperty('--yellow', 'Maroon');
}
