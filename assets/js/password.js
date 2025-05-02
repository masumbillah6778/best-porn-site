// by https://www.gxfreee.com/
	
const errorText = document.querySelector(".error-text");
var Password ="1234";
function passcheck(){
    if (document.getElementById('pass1').value != Password) {
        errorText.style.display = "block";
        errorText.textContent = "ERROR! Password Not Match.";
        return false;
    }
    if (document.getElementById('pass1').value == Password) {
        window.open("main/index2.html", "_blank");
    }

}
// by https://www.gxfreee.com/
