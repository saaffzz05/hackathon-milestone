// Grabbing form and resume output elements
var Form = document.getElementById('resumeForm');
var resumeDispalyElement = document.getElementById('resume-display');
// Add event listener to handle form submission
Form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var skills = document.getElementById('skills').value.split(',');
    // Generate the resume output
    var resumeHTML = "\n        <h1><b>Resume</b></h1>\n        <h3><u>Personal Information</u></h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n\n        <h3><u>Education</u></h3>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>Institution:</strong> ").concat(institution, "</p>\n\n        <h3><u>Work Experience</u></h3>\n        <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n        <p><strong>Company:</strong> ").concat(company, "</p>\n\n        <h3><u>Skills</u></h3>\n        <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n    ");
    if (resumeDispalyElement) {
        resumeDispalyElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display is missing');
    }
});
