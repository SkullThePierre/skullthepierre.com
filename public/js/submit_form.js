$(document).ready(function() {

    // get the form elements defined in your form HTML above

    const form = $("#contactForm")[0];
    const button = $("#sendMessage")[0];
    const status = $("#status")[0];

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        $(button).off("click")
        button.setAttribute("id", "send_disabled")
        button.innerText = "Thanks!"
        status.innerText = "I'll get back to you soon :)";
    }

    function error() {
        status.innerText = "Oops! There was a problem. Please try again.";
    }

    // handle the form submission event

    $(button).on('click', function(e) {
        e.preventDefault();
        let data = new FormData(form);
        sendData(form.method, form.action, data, success, error);
    })
});

// helper function for sending an AJAX request

function sendData(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}