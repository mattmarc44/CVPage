function sendMail(contactForm) {
    emailjs.send("gmail", "mattmarcdev_website_email", {
        "from_name": contactForm.formName.value,
        "last_name": contactForm.formLastName.value,
        "from_email": contactForm.formEmail.value,
        "subject": contactForm.subject.value,
        "email_from_site": contactForm.formMessage.value
    }).then(
        function(response) {
            console.log("success!", response);
        },
        function(error) {
            console.log("error!!!", error);
        }
    );
    return false;
};