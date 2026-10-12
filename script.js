const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuToggle.textContent = isOpen ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('enquiryForm');
const status = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `Website enquiry: ${data.get('interest')}`;
    const body = [
      'Hello ABI Consultancy,',
      '',
      'I would like to enquire about your services.',
      '',
      `Name: ${data.get('name')}`,
      `Company: ${data.get('company') || 'Not provided'}`,
      `Phone: ${data.get('phone')}`,
      `Work email: ${data.get('email') || 'Not provided'}`,
      `Interested in: ${data.get('interest')}`,
      '',
      'Requirement:',
      data.get('message'),
      '',
      'Sent from the ABI Consultancy website.'
    ].join('\n');
    const mailto = `mailto:marketing@abiconsultancy.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Opening your email app with the enquiry pre-filled. Please send the email to complete your enquiry.';
    window.location.href = mailto;
  });
}
