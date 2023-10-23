document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementsByName("display")[0];

    function updateDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function deleteLastChar() {
        display.value = display.value.slice(0, -1);
    }

    // Add click event listeners for your buttons
    document.querySelector('input[value="AC"]').addEventListener('click', clearDisplay);
    document.querySelector('input[value="DE"]').addEventListener('click', deleteLastChar);
    document.querySelector('input[value="."]').addEventListener('click', () => updateDisplay('.'));
    document.querySelector('input[value="/"]').addEventListener('click', () => updateDisplay('/'));

    // Add similar event listeners for other buttons.

    // Handle the "=" button
    document.querySelector('input[value="="]').addEventListener('click', function () {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    });
});
