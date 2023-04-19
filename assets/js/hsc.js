function calculate() {
	
    var a=parseInt(document.getElementById('subone').value);
	
    var b=parseInt(document.getElementById('subtwo').value);
	
    var c=parseInt(document.getElementById('subthree').value);
	
    var d=parseInt(document.getElementById('subfour').value);
	
    var e=parseInt(document.getElementById('subfive').value);

    var f=parseInt(document.getElementById('subsix').value);
	
    if (a > 200 || b > 200 || c > 200 || d > 200 || e > 200 || f > 200) {
	
        alert("Please enter correct value");
	
    }
	
    else {
	
        var obtain=a+b+c+d+e+f;
	
        document.getElementById("obtain").innerHTML=obtain;
	
        var per=obtain/1200*100;
	
        document.getElementById("per").innerHTML=per;

        var cutoff=((c)/2)+((d+e)/4)

        document.getElementById("cutoff").innerHTML=cutoff;
	
        if (a > 69 && b > 69 && c > 69 && d > 69 && e > 69 && f > 69) {
	
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