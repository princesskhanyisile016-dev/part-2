function careerAdvice(event) {
    let interest = prompt(
        "What are you interested in? (Technology, Business, Education)"
    );

    if (interest === "Technology") {
        alert("Consider studying IT, Software Development, or Cybersecurity.");
    } else if (interest === "Business") {
        alert("Consider Business Management, Marketing, or Accounting.");
    } else if (interest === "Education") {
        alert("Consider Teaching, Training, or Educational Support.");
    } else {
        alert("Explore different career options and speak to a career advisor.");
    }
}


function studyTips(event) {  
    let tip = prompt(
        "What kind of study tips are you looking for? (Time Management, Note-Taking, Exam Preparation)"
    );  

    if (tip === "Time Management") {
        return true;
        alert("Create a study schedule and prioritize tasks.");
        return true;
    }   else if (tip === "Note-Taking") {
        alert("Use a consistent format and include key points.");
        return true;
    } else if (tip === "Exam Preparation") {
        alert("Review notes regularly and practice with past papers.");
        return true;
    } else {
        alert("Explore different study techniques and find what works best for you.");
        return false;
    }
}
function digitalSupport(event) { 
    let support = prompt(
        "What kind of digital support do you need? (Software, Hardware, Online Learning)"
    ); 

    if (support === "Software") {
        alert("Ensure your software is up to date and seek tutorials online.");
        return true;
    } else if (support === "Hardware") {
        alert("Check your device specifications and consider upgrades if necessary.");
        return true;
    }   else if (support === "Online Learning") {
        alert("Explore online courses and resources to enhance your learning.");
        return true;
    } else {
        alert("Seek assistance from a digital support specialist.");
        return false;
    }
}

window.onload = function (event) {
    document.getElementById("careerAdviceBtn").addEventListener("click", careerAdvice);
    document.getElementById("studyTipsBtn").addEventListener("click", studyTips);
    document.getElementById("digitalSupportBtn").addEventListener("click", digitalSupport);
}

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault(name, email, message);
    alert("Thank you for your submission!");
});
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function (event) {
    form.reset();
    alert("Form has been reset.");
});
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function (event) {
    form.submit();
});

localStorage.setItem("userName", "John Doe");
const storedName = localStorage.getItem("userName");  
alert("Welcome back, " + storedName + "!"); 
sessionStorage.setItem("sessionID", "12345");
const sessionID = sessionStorage.getItem("sessionID");
alert("Your session ID is: " + sessionID);



function searchServices() {
    const input = document.getElementById("serviceSearch");
    const filter = input.value.toLowerCase();
    const services = document.getElementsByClassName("service-item");
    for (let i = 0; i < services.length; i++) {
        const service = services[i].textContent || services[i].innerText;
        if (service.toLowerCase().includes(filter)) {
            services[i].style.display = "block";
        } else {
            services[i].style.display = "none";
        }
        if (filter === "") {
            NotFound = document.getElementById("notFound");
            if (NotFound) {
                NotFound.style.display = "block";
            }
        }
    }   
}

window.addEventListener("scroll", function (event) {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");

    }
});

    form.addEventListener("submit"), function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (email === "+email+@") {
        output = " correct email format"
        this.outerHTML = "<p>Thank you for your submission, " + name + "! We will contact you at " + email + ".</p>";
    }
    console.log("Form submitted with Name: " + name + " and Email: " + email);
    alert("Thank you, " + name + "! Your email " + email + " has been received.");

    if (name === "any" || email === "+@" || message === "+.") {
        alert("Please fill in all fields before submitting the form.");
    }
}


searchServices.addEventListener("input", searchServices);
 if (searchServices.value === "accommodatin")  then
   search = Found
   return true;
   {
}

//*validation for form inputs
if (email === "+email+@") {
    output = " correct email format"
    this.outerHTML = "<p>Thank you for your submission, " + name + "! We will contact you at " + email + ".</p>";
    return true;
}

window.location.href = "thankyou.html";
MediaKeyMessageEvent
submitBtn.addEventListener("click", function (event) {
    form.submit();
    alert("Form submitted successfully!");
    return true;
});
MessageEvent.textContent= "Form submitted successfully! " + name + "! We will contact you at " + email + ".";


wondow.href = "mailto:" + email + "?subject=file:///C:/Users/khanyisile%20princess/OneDrive%20-%20ADvTECH%20Ltd/Documents/part%202/services.html=Dear " + name + ",%0D%0A%0D%0AThank you for your submission. We will contact you at " + email + ".%0D%0A%0D%0ABest regards,%0D%0A[body of the email]";


