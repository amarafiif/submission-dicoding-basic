window.addEventListener("scroll", function () {
	var navbar = document.querySelector(".navbar");
	var jumbotronHeight = document.querySelector(".banner").offsetHeight;

	if (window.scrollY > jumbotronHeight) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
});

document.addEventListener("DOMContentLoaded", function () {
	var navbar = document.getElementById("navbar");
	var navLinks = navbar.querySelectorAll("a");

	function setActiveNavLink() {
		var scrollPosition = window.scrollY;

		navLinks.forEach(function (link) {
			var sectionId = link.getAttribute("href").substr(1);
			var section = document.getElementById(sectionId);

			if (section) {
				var sectionTop = section.offsetTop;
				var sectionBottom = sectionTop + section.offsetHeight;

				if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
					link.classList.add("active");
				} else {
					link.classList.remove("active");
				}
			}
		});
	}

	setActiveNavLink();

	window.addEventListener("scroll", setActiveNavLink);
});
var currentYear = new Date().getFullYear();
document.getElementById("footerYearCopyright").innerHTML = currentYear;
