function openNav() {
	let x = window.matchMedia("(max-width: 768px)");
	let openBtn = document.querySelector(".openBtn");
	let closeBtn = document.querySelector (".closeBtn");
	function myFunction(x) {
		if (x.matches) {
			document.getElementById("myNav").style.height = "100%";
			document.querySelector("#myNav").style.backgroundImage = "linear-gradient(transparent, rgba(0,0,0,0.4))";
			openBtn.style.display = "none";
		} else {
			document.querySelector("#myNav").style.backgroundColor = "transparent"; 
			document.querySelector("#myNav").style.backgroundImage = "none";
		}
	}
	myFunction(x);
	x.addListener(myFunction);
} 
function closeNav() {
	let x = window.matchMedia("(max-width: 768px)");
	let openBtn = document.querySelector(".openBtn");
	let closeBtn = document.querySelector (".closeBtn");
	function myFunction(x) {
		if (x.matches) {
			document.getElementById("myNav").style.height = "0%";
			openBtn.style.display = "block";
			//document.body.style.backgroundColor = "green";
		} else {
			document.getElementById("myNav").style.height = "100%";
			openBtn.style.display = "none";
			//document.body.style.backgroundColor = "blue";
		}
	}
	myFunction(x);
	x.addListener(myFunction);
} 


