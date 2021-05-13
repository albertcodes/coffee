"use strict";

console.log("Hello there!");
console.log("Welcome to my page (: ");

$(document).ready(function () {
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').animate({
			'scrollTop': $target.offset().top
		}, 750, 'swing');
	});
});
$('.burger').click(function () {
	$(this).toggleClass('open');
});

// Prevent context menu fron opening
document.addEventListener("contextmenu", function (evt) {
	evt.preventDefault();
}, false);

// Prevent clipboard copying
document.addEventListener("copy", function (evt) {
	// Change the copied text if you want
	evt.clipboardData.setData("text/plain", "Copying is disabled");

	// Prevent the default copy action
	evt.preventDefault();
}, false);

// Formspree - disable to local msg
var form = document.getElementById("contact");

async function handleSubmit(event) {
	event.preventDefault();
	var status = document.getElementById("status");
	var data = new FormData(event.target);
	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			'Accept': 'application/json'
		}
	}).then(success => {
		status.classList.add('success');
		status.innerHTML = "☻ Thanks, I'll get in touch.";
		form.reset()
	}).catch(error => {
		status.classList.add('error');
		status.innerHTML = "❕ Oops! An error occured."
	});
}
form.addEventListener("submit", handleSubmit)