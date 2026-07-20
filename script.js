function calcAge() {
    let year = document.getElementById('age').value;
    let result = document.getElementById('result');

    if (!year) {
        result.textContent = "Please enter a year!";
    } else {
        let age = 2026 - year;
        result.textContent = "Your age is " + age + " years old.";
    }
}