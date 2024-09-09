// Function to trigger hidden form autofill
function triggerAutofill() {
    const hiddenForm = document.getElementById('hiddenForm');
    hiddenForm.style.display = 'block';

    const fields = hiddenForm.querySelectorAll('input');
    fields.forEach(field => {
        field.focus();  // Simulate focus to trigger browser autofill
        field.blur();   // Blur to simulate completing the autofill process
    });

    setTimeout(() => {
        hiddenForm.style.display = 'none';  // Hide the form after 1 second
    }, 1000);

    alert('Autofill triggered!');
}