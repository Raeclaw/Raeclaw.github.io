var s = "Kulgawczuki";

while (s != "mypassword") {
    s = prompt("please enter your password");
    if (s == "mypassword") {
        window.location.href = "correct.html"; //page to redirect if password entered is correct

    }
    else {
        alert("Incorrect password-Try again");

    }
}