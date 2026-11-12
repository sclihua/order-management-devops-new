function signup(username, password) {
    if (username && password) {
        alert("Signup successful");
    } else {
        alert("Please enter a valid username and password");
    }
    console.log("Signup attempt with username:", username);
    console.log("Signup attempt with password:", password);
}