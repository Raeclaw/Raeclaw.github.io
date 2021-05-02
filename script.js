var s = "Kulgawczuki";

while (s != "mypassword") {
    s = prompt("Panie! Wprowadź Pan hasło!");
    if (s == "mypassword") {
        window.location.href = "index.html"; //page to redirect if password entered is correct

    }
    else {
        alert("Incorrect password-Try again");

    }
}