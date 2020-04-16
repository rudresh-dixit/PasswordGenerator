const advancePasswordGenerator = (options = {}) => {
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = upperCase.toLowerCase();
    let numbers = "1234567890";
    let specials = "!@#$%^&*()_-+={}|?/>.<,";

    let chars = upperCase + lowerCase;
    
    if(options.includeNumbers) {
        chars += numbers;
    }

    if(options.includeSpecials) {
        chars += specials;
    }

    let length = options.length || 12;
    var password = "";

    for (let i=0; i<length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    return password;
}

console.log(advancePasswordGenerator());
console.log(advancePasswordGenerator({
    includeNumbers: true,
    includeSpecials: true,
    length: 24
}))