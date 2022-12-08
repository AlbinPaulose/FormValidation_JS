function Validate() {
    CheckUserid();
    CheckName();
    CheckPassword();
    CheckAddress();
    CheckCountry();
    CheckZipcode();
    CheckEmail();


    userid = document.getElementById("userid").value;
    pass = document.getElementById("paswrd").value;
    name = document.getElementById("name").value;
    adddress = document.getElementById('address').value;
    country = document.getElementById('country');
    zipcode = document.getElementById('zipcode').value
    email = document.getElementById('email').value
    male = document.getElementById('male').checked;
    female = document.getElementById('female').checked;
    if (male == false && female == false) {
        CheckGender();

    }
    else if (male == true || female == true) {
        CheckGender();
    }

    if (userid == "" || pass == "" || name == "" || adddress == "" || country.value == 0 || zipcode == "" || email == "" || (male == false && female == false)) {
        return false
    }
    else {
        alert("success");
    }
    
    
}
function CheckUserid() {
    userid = document.getElementById("userid").value;
    document.getElementById("useridError").style.color = 'red';
    if (userid == "") {
        document.getElementById("useridError").innerHTML = "enter userid";
        document.getElementById("userid").focus();
        return false;
    }
    else {
        document.getElementById("useridError").innerHTML = "";

    }
    
    if (userid.length < 5 || userid.length > 7) {
        document.getElementById("useridError").innerHTML = "enter 5 to 7 characters ";
        document.getElementById("userid").focus();
        return false;
    }
    else {
        document.getElementById("useridError").innerHTML = "";


    }

}
function CheckPassword() {
    pass = document.getElementById("paswrd").value;
    if (pass == "") {
        document.getElementById("passwordError").style.color = 'red';
        document.getElementById("passwordError").innerHTML = "enter password";
        document.getElementById("paswrd").focus();
        return false;
    }
    else {
        document.getElementById("passwordError").innerHTML = "";

    }
    if (pass.length < 7 || pass.length > 12) {
        document.getElementById("passwordError").innerHTML = "enter 7 to 12 characters ";
        document.getElementById("password").focus();
        return false;
    }
    else {
        document.getElementById("passwordError").innerHTML = "";


    }

}

function CheckName() {
    name = document.getElementById('name').value;
    if (name == "") {
        document.getElementById('nameError').style.color = 'red';
        document.getElementById('nameError').innerHTML = "enter name";
        document.getElementById('name').focus();
        return false;
    }
    else {
        document.getElementById('nameError').innerHTML = "";
    }

    if (!name.match(/^[a-zA-Z\s]+$/)) {
        document.getElementById('nameError').style.color = 'red';
        document.getElementById('nameError').innerHTML = "enter alphabets only";
        document.getElementById('name').focus();
        return false;
    }
    else {
        document.getElementById('nameError').innerHTML = "";
    }

}

function CheckAddress() {
    address = document.getElementById('address').value;
    if (address == "") {
        document.getElementById('addressError').style.color = 'red';
        document.getElementById('addressError').innerHTML = "enter address";
        document.getElementById('address').focus();
        return false;
    }
    else {
        document.getElementById('addressError').innerHTML = "";
    }

    if (!address.match(/^[0-9a-zA-Z]+$/)) {
        document.getElementById('addressError').style.color = 'red';
        document.getElementById('addressError').innerHTML = "Alphanumeric characters only";
        document.getElementById('address').focus();
        return false;
    }
    else {
        document.getElementById('addressError').innerHTML = "";
    }
}

function CheckCountry() {
    country = document.getElementById('country');
    if (country.value == 0) {
        document.getElementById('countryError').style.color = 'red';
        document.getElementById('countryError').innerHTML = "select country";
        document.getElementById('country').focus();
        return false;
    }
    else {
        document.getElementById('countryError').innerHTML = "";
    }
}
function CheckZipcode() {
    zipcode = document.getElementById('zipcode').value;
    if (zipcode == "") {
        document.getElementById('zipcodeError').style.color = 'red';
        document.getElementById('zipcodeError').innerHTML = "enter zipcode";
        document.getElementById('zipcode').focus();
        return false;
    }
    else {
        document.getElementById('zipcodeError').innerHTML = "";
    }

    if (!zipcode.match(/^[0-9a-zA-Z]+$/)) {
        document.getElementById('zipcodeError').style.color = 'red';
        document.getElementById('zipcodeError').innerHTML = "Alphanumeric only";
        document.getElementById('zipcode').focus();
        return false;
    }
    else {
        document.getElementById('zipcodeError').innerHTML = "";
    }
}
function CheckEmail() {
    email = document.getElementById('email').value
    if (email == "") {
        document.getElementById('emailError').style.color = 'red';
        document.getElementById('emailError').innerHTML = "enter email";
        document.getElementById('email').focus();
        return false;
    }
    else {
        document.getElementById('emailError').innerHTML = "";
    }

    var x = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(x)) {
        document.getElementById('emailError').style.color = 'red';
        document.getElementById('emailError').innerHTML = "enter valid email";
        document.getElementById('email').focus();
        return false;
    }
    else {
        document.getElementById('emailError').innerHTML = "";
    }
}

function CheckGender() {
    male = document.getElementById('male').checked;
    female = document.getElementById('female').checked;
    if (male == false && female == false) {
        document.getElementById('genderError').style.color = 'red';
        document.getElementById('genderError').innerHTML = "select male or female";
        return false;
    }
    else if(male == true || female == true) {
        document.getElementById('genderError').innerHTML = "";
    }
}

