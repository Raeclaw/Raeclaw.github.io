let s;

while (s != "Kulgawczuki") {
    s = prompt("Wprowadź hasło.");
    if (s == "Kulgawczuki") {
        window.location.href = "index.html"; //page to redirect if password entered is correct

    }
    else {
        alert("Incorrect password-Try again");

    }
}