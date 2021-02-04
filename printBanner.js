function printBanner (text) {
    for (count = 0; count < 3; count++) {
        if (count === 0 || count === 2) {
            console.log("*".repeat(text.length + 4));
        } else {
            console.log("* " + text + " *");
        }
    }
    return
}

printBanner("Welcome to DigitalCrafts");