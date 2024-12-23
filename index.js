const PasswordBox = document.getElementById("final-password");

const CharacterSets = [
    {id: "UpperCase", label: "UpperCaseLetters", characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
    {id: "LowerCase", label: "LowerCaseLetters", characters: "abcdefghijklmnopqrstuvwxyz"},
    {id: "Numbers", label: "Numbers", characters: "1234567890"},
    {id: "Symbols", label: "Symbols", characters: "!#$%&/()="},
]

function RangeAlert() {
    const PasswordLength = Number(document.getElementById("passwordlengthtext").value);
    if (isNaN(PasswordLength) || PasswordLength < 4 || PasswordLength > 30) {
        alert("Password length must be between 4 and 30 characters.");
        return;
    }

    const CheckedSets = CharacterSets.filter(set => document.getElementById(set.id.toLowerCase()).checked);
    if (CheckedSets.length === 0) {
        alert("Please select at least one checkbox.");
        return;
    }

    let password = "";
    password += CheckedSets[Math.floor(Math.random() * CheckedSets.length)].characters[Math.floor(Math.random() * CheckedSets[0].characters.length)];

    while (password.length < PasswordLength) {
        const RandomCharacters = CheckedSets[Math.floor(Math.random() * CheckedSets.length)];
        password += RandomCharacters.characters[Math.floor(Math.random() * RandomCharacters.characters.length)];
    }

    PasswordBox.value = password;
}
