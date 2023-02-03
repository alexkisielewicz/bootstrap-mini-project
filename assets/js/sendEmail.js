function sendMail(contactForm) {
    let templateParams = {
				"from_name": contactForm.name.value,
				"from_email": contactForm.emailaddress.value,
                "project_request": contactForm.projectsummary.value
			};

	let publicKey = "g1axgIaSxxc6CzUiB";
			
    emailjs.init("service_uds44db");
    emailjs.send("service_uds44db", "bootstrap", templateParams, publicKey)
        .then(
            function(response) {
                console.log("SUCCESS", response);
            }, 
            function(error) {
                console.log("FAILED", error);
            });
    return false;
} 