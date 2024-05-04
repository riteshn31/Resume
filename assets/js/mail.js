$('.php-email-form').on('submit', function (event) {
    event.preventDefault(); // prevent reload

    var formData = new FormData(this);
    formData.append('service_id', 'service_m4f7ifn');
    formData.append('template_id', 'template_k8ajg4g');
    formData.append('user_id', 'WlRZmSKn-pdECbExb');

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function () {
        $('.sent-message').show();
        setTimeout(function () {
            $('.sent-message').hide();
        }, 20000);
    }).fail(function () {
        $('.error-message').show();
        setTimeout(function () {
            $('.error-message').hide();
        }, 20000);
    });
});