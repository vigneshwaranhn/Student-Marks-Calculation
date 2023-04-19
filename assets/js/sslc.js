function calculate() {
	
    var a=parseInt(document.getElementById('subone').value);
	
    var b=parseInt(document.getElementById('subtwo').value);
	
    var c=parseInt(document.getElementById('subthree').value);
	
    var d=parseInt(document.getElementById('subfour').value);
	
    var e=parseInt(document.getElementById('subfive').value);
	
    if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
	
        alert("Please enter correct value");
	
    }
	
    else {
	
        var obtain=a+b+c+d+e;
	
        document.getElementById("obtain").innerHTML=obtain;
	
        var per=obtain/500*100;
	
        document.getElementById("per").innerHTML=per;
	
        if (a > 39 && b > 39 && c > 39 && d > 39 && e > 39) {
	
            document.querySelector("#remarks").innerHTML="<span style='color:#292'>Pass</span>";
	
        }
	
        else {
	
            document.querySelector("#remarks").innerHTML="<span style='color:red'>Fail</span>";
	
        }
	
        if (per >= 80) {
	
            document.getElementById("grade").textContent="A";
	
        }
	
        else if (per >= 70) {
	
            document.getElementById("grade").textContent="B";
	
        }
	
        else if (per >= 60) {
	
            document.getElementById("grade").textContent="C";
	
        }
	
        else if (per >= 50) {
	
            document.getElementById("grade").textContent="D";
	
        }
	
        else if (per >= 40) {
	
            document.getElementById("grade").textContent="E";
	
        }
	
        else {
	
            document.getElementById("grade").textContent="F";
	
        }
	
    }
	
    return false;

}