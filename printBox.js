function printBox (width, height) {
    for (count = 0; count < height; count++) {
        if (count === 0 || count === height - 1) {
            console.log("*".repeat(width));
        } else {
            console.log("*" + " ".repeat(width - 2) + "*");
        }
    }
    return
}

printBox(6, 4)