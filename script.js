function onloadCallback() {
    var recaptcha1 = grecaptcha.render('recaptcha-container', {
        'sitekey' : 'YOUR_SITE_KEY'
    });
}

document.getElementById('submit-button').addEventListener('click', function() {
    grecaptcha.ready(function() {
        grecaptcha.execute('YOUR_SITE_KEY', {action: 'submit'}).then(function(token) {
            // Send the token to your server for verification
            console.log('reCAPTCHA token:', token);

            // Example: Send token to server using AJAX with error handling
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/verify-recaptcha', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    console.log('reCAPTCHA verification successful');
                } else {
                    console.error('reCAPTCHA verification failed:', xhr.responseText);
                    // Handle the error, e.g., display a message to the user
                }
            };
            xhr.onerror = function() {
                console.error('Error sending reCAPTCHA token to server');
                // Handle the error, e.g., display a message to the user
            };
            xhr.send('token=' + token);
        }).catch(function(error) {
            console.error('reCAPTCHA error:', error);
            // Handle the error, e.g., display a message to the user
        });
    });
});
