const contact = document.getElementById('contact');
const contact_name = document.getElementById('name');
const contact_service = document.getElementById('service');
const contact_message = document.getElementById('message');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const subject = `${contact_name.value}: ${contact_service.value}`;
    const body = contact_message.value;

    const mailto =
    `mailto:RRsadrokartony@seznam.cz` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

    form.reset();

    window.location.href = mailto;
});

function select_service(index) {
    contact_service.selectedIndex = index;
    contact.scrollIntoView();

    contact_service.classList.remove("mark");
    void contact_service.offsetWidth;
    contact_service.classList.add("mark");
}
