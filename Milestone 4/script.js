// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeoutput = document.getElementById('resume-output');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone number').value;
    var degree = document.getElementById('degree').value;
    var institutionname = document.getElementById('institution name').value;
    var graduationdate = document.getElementById('graduation date').value;
    var jobtitle = document.getElementById('job title').value;
    var companyname = document.getElementById('company name').value;
    var achievements = document.getElementById('achievements').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumedisplay = "\n    <h1><b> RESUME FORM </b></h1>\n    <h2>Personal Information</h2>\n    <p><b>Name:</b>".concat(name, "\n    <p><b>Email:</b>").concat(email, "\n    <p><b>Phone Number:</b>").concat(phone, "\n\n    <h2>Education Details</h2>\n    <p><b>Degree:</b>").concat(degree, "\n    <p><b>Institution Name:</b>").concat(institutionname, "\n    <p><b>Graduation Date:</b>").concat(graduationdate, "\n\n    <h2>Work Experience</h2>\n    <p><b>Job Title:</b>").concat(jobtitle, "\n    <p><b>Company Name:</b>").concat(companyname, "\n    <p><b>Achievements:</b>").concat(achievements, "\n\n    <h2>Skills</h2>\n    <p><b>Skills:</b>").concat(skills, "\n    ");
    if (resumeoutput) {
        resumeoutput.innerHTML = resumedisplay;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
