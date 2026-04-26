function sendMail() {
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields before sending.');
        return;
    }

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    const mailto = `mailto:contact.collisioncourse@protonmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailto;
}