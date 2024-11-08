const btn = document.getElementById('button-form');

document.getElementById('form')?.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.textContent = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ej7t9q5';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.textContent = 'Send Email';
      alert(JSON.stringify(err));
    });
});