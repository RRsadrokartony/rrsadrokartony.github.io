const contact = document.getElementById('contact');
const contact_name = document.getElementById('name');
const contact_service = document.getElementById('service');
const contact_message = document.getElementById('message');


function openMailClient() {
    if (!document.getElementById('form').checkValidity())
        return

    const subject = contact_name.value + ": " + contact_service.value;
    window.location.href = `mailto:RRsadrokartony@seznam.cz?subject=${subject}&body=${contact_message.value}`;
}

function select_service(index) {
    contact_service.selectedIndex = index
    contact.scrollIntoView();
}
