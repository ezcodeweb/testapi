function onloadCallback() {
    var recaptcha1 = grecaptcha.render('recaptcha-container', {
        'sitekey' : '6LfF6GIqAAAAAAvJh8zs9zl2hXJhIkmho7s0ObMe'
    });
}

document.getElementById('submit-button').addEventListener('click', function() {
    grecaptcha.ready(function() {
        grecaptcha.execute('6LfF6GIqAAAAAAvJh8zs9zl2hXJhIkmho7s0ObMe', {action: 'submit'}).then(function(token) {
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
