function città() {
	var x = document.getElementById("casella1").value;
	var y = "Città di Reykjavik";
	if (x!=y) {
		document.getElementById("p1").innerHTML = "ops..risposta errata";
		document.getElementById("p1").style.color = "red";
		document.getElementById("p1").style.fontSize = "30px";
		document.getElementById("input").style.display = "block";
    }
	   else {
		document.getElementById("p1").innerHTML = "Complimenti";
	    document.getElementById("p1").style.color = "green";
		document.getElementById("p1").style.fontSize = "30px";
        document.getElementById("a1").style.display = "block";
        document.getElementById("ul1").style.display = "block";
		document.getElementById("div1").style.display = "block";	
	   }
}

function foresta() {
	var x = document.getElementById("casella2").value;
	var y = "Foresta Storta";
	if (x!=y) {
		document.getElementById("p2").innerHTML = "ops..risposta errata";
		document.getElementById("p2").style.color = "red";
		document.getElementById("p2").style.fontSize = "30px";
		document.getElementById("input").style.display = "block";
    }
	   else {
		document.getElementById("p2").innerHTML = "Complimenti";
	    document.getElementById("p2").style.color = "green";
		document.getElementById("p2").style.fontSize = "30px";
        document.getElementById("a2").style.display = "block";
        document.getElementById("ul2").style.display = "block";
	    document.getElementById("div2").style.display = "block";	

	   }
}

function lago() {
	var x = document.getElementById("casella3").value;
	var y = "Mar Caspio";
	if (x!=y) {
		document.getElementById("p3").innerHTML = "ops..risposta errata";
		document.getElementById("p3").style.color = "red";
		document.getElementById("p3").style.fontSize = "30px";
		document.getElementById("input").style.display = "block";
    }
	   else {
		document.getElementById("p3").innerHTML = "Complimenti";
	    document.getElementById("p3").style.color = "green";
		document.getElementById("p3").style.fontSize = "30px";
        document.getElementById("a3").style.display = "block";
        document.getElementById("ul3").style.display = "block";	
	    document.getElementById("div3").style.display = "block";	
	   }
}

function catMontuosa() {
	var x = document.getElementById("casella4").value;
	var y = "Cordigliera delle Ande";
	if (x!=y) {
		document.getElementById("p4").innerHTML = "ops..risposta errata";
		document.getElementById("p4").style.color = "red";
		document.getElementById("p4").style.fontSize = "30px";
		document.getElementById("input").style.display = "block";
    }
	   else {
		document.getElementById("p4").innerHTML = "Complimenti";
	    document.getElementById("p4").style.color = "green";
		document.getElementById("p4").style.fontSize = "30px";
        document.getElementById("a4").style.display = "block";
        document.getElementById("ul4").style.display = "block";	
	    document.getElementById("div4").style.display = "block";	
	   }
}

function fiume() {
	var x = document.getElementById("casella5").value;
	var y = "Rio delle Amazzoni";
	if (x!=y) {
		document.getElementById("p5").innerHTML = "ops..risposta errata";
		document.getElementById("p5").style.color = "red";
		document.getElementById("p5").style.fontSize = "30px";
		document.getElementById("input").style.display = "block";
    }
	   else {
		document.getElementById("p5").innerHTML = "Complimenti";
	    document.getElementById("p5").style.color = "green";
		document.getElementById("p5").style.fontSize = "30px";
        document.getElementById("ul5").style.display = "block";
	    document.getElementById("div5").style.display = "block";
		document.getElementById("button").style.display = "block";
	   }
}

function ritenta() {
	document.location.reload(true);
}
	
function termina() {
			document.getElementById("cont").style.display = "none";
		    document.body.style.backgroundImage = "url('festa.jpg')";
}

	
