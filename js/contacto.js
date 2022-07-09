const contact = (event)=> {
    event.preventDefault();
    
    let contactName = document.getElementById('contact-name').value;
    let contactDNI = document.getElementById('contact-dni').value;
    let contactEmail = document.getElementById('contact-email').value;
    let contactNumber = document.getElementById('contact-number').value;
    let contactMessage = document.getElementById('contact-text').value;
    
    console.log(contactName, contactDNI, contactEmail, contactNumber, contactMessage);

    let contactNameOk = /^[a-zA-Z]{4,35}$/.test(contactName);
    let contactDNIOk = contactDNI.length<=12 && contactDNI.length>=6;
    console.log(contactDNIOk);
    let contactEmailOk = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(contactEmail);
    let contactNumberOk = contactNumber.length<=13 && contactNumber>=9;
    let contactMessageOk = contactMessage.length<=300;

    console.log(contactNameOk, contactDNIOk, contactEmailOk, contactNumberOk, contactMessageOk);
    
    if (contactNameOk && contactDNIOk && contactEmailOk && contactNumberOk && contactMessageOk) {
        console.log('Validaciones excelentes');
        let sendMessage = document.createElement('div');
        sendMessage.innerText = 'Recibimos tu mensaje, Muchas Gracias!' 
    let messageSend = document.getElementById('contact-form');
    messageSend.appendChild(sendMessage);
    }
}