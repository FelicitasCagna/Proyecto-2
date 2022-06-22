const sendmessage = (event)=> {
    event.preventDefault();
    
    let contactName = document.getElementById('contact-name');
    let contactDNI = document.getElementById('contact-dni');
    let contactEmail = document.getElementById('contact-email');
    let contactNumber = document.getElementById('contact-number');
    let contactMessage = document.getElementById('contact-text');
    
    let contactNameOk = /^[a-zA-Z]{4,35}$/.test(contactName);
    let contactDNIOk = contactDNI.lenght<=8 && contactDNI.lenght>=6
    let contactEmailOk = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(contactEmail);
    let contactNumberOk = contactNumber.lenght<=13 && contactNumber>=9;
    let contactMessageOk = contactMessage.lenght<=100;
    
    if (contactNameOk && contactDNIOk && contactEmailOk && contactNumberOk && contactMessageOk) {
        let sendMessage = document.createElement('div');
        sendMessage.innerHTML = <div>
        <div class="modal" id="contact-modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Muchas gracias!</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Recibimos tu mensaje </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    let messageSend = document.getElementById('contact-form');
    messageSend.appendChild(sendMessage);
    }
}