document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    let values = "";
    let values1 = "";
    let values2 = "";
    let values3 = "";

    // Select DOM elements
    const whatsappBtn = document.getElementById('whatsapp');
    const sendmessage = document.getElementById('send-message');
    const message1 = document.querySelector('.msg');
    const message2 = document.querySelector('.msg1');
    const message3 = document.querySelector('.msg2');
    const message4 = document.querySelector('.msg3');

    // Define the phone number and base message
    const phonenumber = '9650246834';
    const baseMsg = 'Hii Vishu';

    // Update the WhatsApp URL with base message
    const getWhatsAppURL = (text) => `https://wa.me/${phonenumber}?text=${encodeURIComponent(text)}`;

    // Event listener for whatsappBtn
    whatsappBtn.addEventListener('click', function() {
        const whatsappURL = getWhatsAppURL(baseMsg);
        window.open(whatsappURL, '_blank');
    });

    // Event listener for sendmessage
    sendmessage.addEventListener('click', function() {
        const msg1 = JSON.stringify({
            val1: values,
            val2: values1,
            val3: values2,
            val4: values3
        });
        const whatsappURL1 = getWhatsAppURL(msg1);
        window.open(whatsappURL1, '_blank');
    });

    // Event listeners for input fields
    if (message1) {
        message1.addEventListener('change', function(event) {
            values = event.target.value;
            console.log('Input value changed to:', values);
        });
    }

    if (message2) {
        message2.addEventListener('change', function(event) {
            values1 = event.target.value;
            console.log('Input value changed to:', values1);
        });
    }

    if (message3) {
        message3.addEventListener('change', function(event) {
            values2 = event.target.value;
            console.log('Input value changed to:', values2);
        });
    }

    if (message4) {
        message4.addEventListener('change', function(event) {
            values3 = event.target.value;
            console.log('Input value changed to:', values3);
        });
    }
});
