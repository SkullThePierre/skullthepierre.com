// Functions to submit data on the contact page.

// get the form elements defined in your form HTML above
const form = $("#contactForm");
const button = $("#sendMessage");
const status = $("#status");

// Success and Error functions for after the form is submitted
function success() {
    form.trigger('reset')

    button.off("click")
    button.removeClass('bg-gray-100 hover:bg-gray-300')
    button.addClass('bg-green-500')
    button.text("Thanks!")

    status.addClass('text-green-500')
    status.text("I'll get back to you soon :)");
}

function error() {
    status.addClass('text-red-500')
    status.text("Oops! There was a problem. Please try again.");
}

// Execute when data entered is invalid.
function invalidData(){
    status.addClass('text-red-500')
    status.text("Please fill in these boxes!");
}

// handle the form submission event
$(button).on('click', function(e) {
    e.preventDefault();
    if (checkValidity(form)) {
        let data = form.serializeArray()
        let mailingList = form.find(["name='mailing_list'"])
        if ( form.find(mailingList.is(':checked')) ){
            let email = form.find("[name='_replyto']").val()
            // Link to mailing-list form in formspree.io:
            let url = "https://formspree.io/f/mwkaekao"
            addToMailingList(url, form[0].method, email)
        }
        sendData(form[0].action, form[0].method, data)
    } else {
        invalidData()
    }
})

// Check if data entered is valid.
function checkValidity(form){
    let valid = true
    form.find('[required=""]').each(function(){
        if( $(this).val() === "" ){
            valid = false
            $(this).addClass('outline-red')
        }
    })
    return valid;
}

// Send the data to formspree.io contact form.
function sendData(url, method, data){
    $.ajax(url,{
        method: method,
        data: data,
        dataType: 'json',
        headers: {
            'Accept': 'application/json'
        }
    })
        .done( function(){
            success()
        })

        .fail( function(){
            error()
        })
}

// Send data to formspree.io mailing-list form.
function addToMailingList(url, method, email){
    $.ajax(url, {
        method: method,
        dataType: "json",
        data: {
            email: email,
        },
        headers: {
            'Accept': 'application/json'
        }
    });
}
