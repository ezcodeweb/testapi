function onloadCallback() {
    var recaptcha1 = grecaptcha.render('recaptcha-container', {
        'sitekey' : '6Leo5mIqAAAAAIo2ZjwJO464sLBBRfmgncH5pX3b'
    });
}

document.getElementById('submit-button').addEventListener('click', function() {
    grecaptcha.ready(function() {
        grecaptcha.execute('6Leo5mIqAAAAAIo2ZjwJO464sLBBRfmgncH5pX3b', {action: 'submit'}).then(function(token) {
            // Send the token to your server for verification
            console.log('reCAPTCHA token:', token);

            // Example: Send token to server using AJAX
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/verify-recaptcha', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    console.log('reCAPTCHA verification successful');
                } else {
                    console.error('reCAPTCHA verification failed');
                }
            };
            xhr.send('token=' + token);
        });
    });
});