let txt = document.querySelector('.text')
let btn = document.querySelector('.btn')
let txtt = document.querySelector('.textt')
let clr = document.querySelector('.clr')

btn.addEventListener('click', function() {
	txtt.innerHTML = txt.value;
})
clr.addEventListener('click', function() {
	txtt.innerHTML = "";
	txt.value = "cleared:)";
	setTimeout(() => { txt.value = ""; }, 500);
})