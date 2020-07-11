let i = 0;

function display() {
    console.log("Hello for the " + i + "th" + " time.");
    if (i != 10) {
        i++;
        display();
    }
}

display();