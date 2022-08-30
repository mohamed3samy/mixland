"use strict";

// Hamburger and mobile menu
function toggleMenu(flag) {
	let value = document.getElementById("menu");
	if (flag) {
		value.classList.remove("hidden");
	} else {
		value.classList.add("hidden");
	}
}

// Sticky navigation on scroll
window.addEventListener("scroll", () => {
	const header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

// Add copyRight inside the footer
const footer = document.getElementById("footer-text");
const footerYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${footerYear} Mixland, All Rights Reserved`;
