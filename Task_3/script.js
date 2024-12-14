const display = document.querySelector(".value");
const buttons = document.querySelectorAll(".num");

buttons.forEach((button) => {
    button.onclick = () => {
        try {
            const action = button.dataset.button;
            if (action === "C") {
                display.value = ""; // Clear all
            } else if (action === "CE") {
                display.value = display.value.slice(0, -1); // Backspace
            } else if (action === "=") {
                display.value = eval(display.value) || ""; // Evaluate
            } else {
                display.value += action; // Append character
            }
        } catch (error) {
            display.value = "Error"; // Show error
        }
    };
});
