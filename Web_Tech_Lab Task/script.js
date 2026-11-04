function toggleButton() {
	let agree=document.getElementById("agree");
document.getElementById("joinBtn").disabled = !agree.checked;}

function validateForm(){
	let valid= true;
	let errorIds=["nameError", "ageError", "mobileError", "emailError",
        "passError", "confirmError", "planError", "dateError",
        "workoutError", "mainError", "backupError", "addonError",
        "finalMessage"
    ];
	for(let i=0; i < errorIds.length; i++){
		document.getElementById(errorIds[i]).innerHTML = "";
	}
	
	let fullName = document.getElementById("fullName").value;
	lat hasText = false;
	for(let i=0; i< fullName.length; i++){
		if(fullName.chaeAt(i) != " "){
	hasText = true;}}
	
	if (!hasText) {
            document.getElementById("nameError").innerHTML = "Your full name is missing.";
        valid = false;

    } else if (fullName.length < 3) {
        document.getElementById("nameError").innerHTML ="Full name is too short (minimum 3 letters).";
        valid = false;

    } else {

        let badChar = false;
        for (let i = 0; i < fullName.length; i++) {
            let ch = fullName.charAt(i);
            let isLetter =
                (ch >= "a" && ch <= "z") ||
                (ch >= "A" && ch <= "Z") ||
                ch == " ";

            if (!isLetter) {
                badChar = true;
            }
		}
		if (badChar) {
            document.getElementById("nameError").innerHTML ="Digits and symbols are not allowed in the full name.";
            valid = false;
        }
    }
	

	let age =document.getElementById("age").value;
    if (age == "" || isNaN(age) || age < 16 || age > 65) {
        document.getElementById("ageError").innerHTML ="Age must be a number from 16 to 65.";
        valid = false;
    }
	
	let mobile =document.getElementById("mobile").value;
    let mobileOk = true;
    if (mobile.length != 11) {
        mobileOk = false;
		
    } else {
        for (let i = 0; i < mobile.length; i++) {
            let ch = mobile.charAt(i);
            if (ch < "0" || ch > "9") {
                mobileOk = false;
            }
        }
        if (mobile.charAt(0) != "0" || mobile.charAt(1) != "1") {
            mobileOk = false;
        }
        if (mobile.charAt(2) < "3") {
            mobileOk = false;
        }
    }
    if (!mobileOk) {
        document.getElementById("mobileError").innerHTML ="Enter a valid mobile number (11 digits, starting with 013 to 019).";
        valid = false;
    }
	
    let email =document.getElementById("email").value;
    if (email == "") {
        document.getElementById("emailError").innerHTML ="Email cannot be left empty.";
        valid = false;

    } else {
        let at = email.indexOf("@");

        if (email.indexOf(" ") != -1 ||
            at == -1 ||
            at == 0 ||
            email.indexOf(".", at) == -1) {
            document.getElementById("emailError").innerHTML ="This email does not look right.";
            valid = false;
        }
    }
	
	let password = document.getElementById("password").value;
    if (password.length < 8) {
        document.getElementById("passError").innerHTML ="Use a password of 8 or more characters.";
        valid = false;

    } else {
        let hasCapital = false;
        let hasDigit = false;
        for (let i = 0; i < password.length; i++) {
            let ch = password.charAt(i);
			
            if (ch >= "A" && ch <= "Z") {
                hasCapital = true;
            }

            if (ch >= "0" && ch <= "9") {
                hasDigit = true;
            }
        }

        if (!hasCapital || !hasDigit) {
            document.getElementById("passError").innerHTML = "Password needs at least one capital letter and one digit.";
            valid = false;
        }
    }
	
	let confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword != password) {
        document.getElementById("confirmError").innerHTML ="The two passwords are not the same.";
        valid = false;
    }

    let plan = document.getElementById("plan").value;
    if (plan == "") {
        document.getElementById("planError").innerHTML = "Please choose a plan.";
        valid = false;
    }

    let startDate = document.getElementById("startDate").value;
    if (startDate == "") {
        document.getElementById("dateError").innerHTML = "Please pick a start date.";
        valid = false;
    }

    let radios = document.getElementsByName("workout");
    let workoutChosen = false;
    for (let i = 0; i < radios.length; i++) {

        if (radios[i].checked) {
            workoutChosen = true;
        }
    }

    if (!workoutChosen) {
        document.getElementById("workoutError").innerHTML = "Please choose a workout time.";
        valid = false;
    }
	
	let mainTrainer = document.getElementById("mainTrainer").value;
    let backupTrainer = document.getElementById("backupTrainer").value;
	
    if (mainTrainer == "") {
		document.getElementById("mainError").innerHTML = "Please choose a main trainer.";
        valid = false;
    }

    if (backupTrainer == "") {
        document.getElementById("backupError").innerHTML = "Please choose a backup trainer.";
        valid = false;

    } else if (backupTrainer == mainTrainer) {
        document.getElementById("backupError").innerHTML = "Backup trainer must be different from the main trainer.";
        valid = false;
    }
	
	let addons = document.getElementById("addons").value;
    if (addons == "" ||
        isNaN(addons) ||
        addons.indexOf(".") != -1 ||
        addons < 0 ||
        addons > 3) {

        document.getElementById("addonError").innerHTML = "Add-ons must be a whole number from 0 to 3.";
        valid = false;
    }
	
	
    if (!valid) {
        return false;
    }
	
	let planFee = 0;
    if (plan == "Monthly") {
        planFee = 1500;
    } else if (plan == "Quarterly") {
        planFee = 4000;
    } else if (plan == "Yearly") {
        planFee = 14000;
    }

    let total = planFee + addons * 500;
    document.getElementById("finalMessage").innerHTML = "Welcome, " + fullName + "! " + "Your " + plan + " membership starts on " + startDate + ". " + "Total payable: " + total + " Taka.";

    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("addons").value = "";
    document.getElementById("plan").selectedIndex = 0;
    document.getElementById("mainTrainer").selectedIndex = 0;
    document.getElementById("backupTrainer").selectedIndex = 0;

    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    document.getElementById("agree").checked = false;
    document.getElementById("joinBtn").disabled = true;
    return false;
}