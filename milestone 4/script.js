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
    var resumeHTML = "\n        <h1><b> Editable Resume</b></h1>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong><span contenteditable='true'>".concat(name, "</span></p>\n        <p><strong>Email:</strong> <span contenteditable='true'>").concat(email, "</span></p>\n\n        <h3>Education</h3>\n        <p><strong>Degree:</strong> <span contenteditable='true'>").concat(degree, "</span></p>\n        <p><strong>Institution:</strong> <span contenteditable='true'>").concat(institution, "</span></p>\n\n        <h3>Work Experience</h3>\n        <p><strong>Job Title:</strong> <span contenteditable='true'>").concat(jobTitle, "</span></p>\n        <p><strong>Company:</strong> <span contenteditable='true'>").concat(company, "</span></p>\n\n        <h3>Skills</h3>\n        <ul><span contenteditable='true'>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</span></ul>\n    ");
    if (resumeDispalyElement) {
        resumeDispalyElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display is missing');
    }
});
