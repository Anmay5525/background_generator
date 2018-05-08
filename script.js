var color1 = document.querySelector("input");
var color2 = document.querySelectorAll("input")[1];
var body = document.querySelector("body");
var h3 = document.querySelectorAll("h3")[1];

function setBackground()
{
	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";

	h3.textContent = body.style.background;
}

color1.addEventListener("input", setBackground);

color2.addEventListener("input", setBackground);