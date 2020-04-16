const generatePassword = (length =12) => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let password = "";

    for(let i=0; i<length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    return password;
}

console.log(generatePassword());
console.log(generatePassword(24));