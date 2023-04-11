// checks if password equals to confirm password section
// set variable for both initial and confirmed password
var pwInit = document.getElementById("usrPw");
var pwConfirm = document.getElementById("confirmPw");

function pwValidate() {
    if (pwInit.value != pwConfirm.value) {
        pwConfirm.setCustomValidity("Passwords don't match");
    }
    else {
        pwConfirm.setCustomValidity("");
    }
}

pwInit.onchange = pwValidate;
pwConfirm.onkeyup = pwValidate;