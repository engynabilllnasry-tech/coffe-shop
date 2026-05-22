
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.onsubmit = (e) => {
        e.preventDefault();

        const name = document.getElementById('userName').value;
        const guests = document.getElementById('guestCount').value;
        const date = document.getElementById('bookingDate').value;
        const time = document.getElementById('bookingTime').value;

        alert(`Welcome, ${name} \nYour reservation for ${guests} guests has been successfully registered.\nWe look forward to seeing you on ${date} at ${time}! 🍷✨`);
        
        bookingForm.reset();
    };
}