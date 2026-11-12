function login(username, password) {
    if (username === "admin" && password === "admin") {
        alert("Login successful");
    } else {
        alert("Invalid username or password");
    }
    console.log("Login attempt with username:", username);
    console.log("Login attempt with password:", password);
}