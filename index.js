const PasswordBox = document.getElementById("final-password");

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "1234567890";
const Symbols = "!#$%&/()="

const AllCharacters = UpperCase + LowerCase + Numbers + Symbols;

function RangeAlert() {
    const PasswordRange = Number(document.getElementById("passwordlengthtext").value);
    if (PasswordRange >= 4 && PasswordRange <= 30) {
        let password = "";
        password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
        password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
        password += Numbers[Math.floor(Math.random() * Numbers.length)];
        password += Symbols[Math.floor(Math.random() * Symbols.length)];

        while (PasswordRange > password.length) {
            password += AllCharacters[Math.floor(Math.random() * AllCharacters.length)];
        }
        PasswordBox.value = password;
    }
    else {
        alert("Input numbers must be between 4 and 30")
    }
}