// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var skills = document.getElementById('skills').value.split(',');
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        institution: institution,
        jobTitle: jobTitle,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving thedata locally
    // Generate the resume content dynamically
    var resumeHTML = "\n      <h1><b> Editable Resume</b></h1>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong><span contenteditable='true'>".concat(name, "</span></p>\n        <p><strong>Email:</strong> <span contenteditable='true'>").concat(email, "</span></p>\n\n        <h3>Education</h3>\n        <p><strong>Degree:</strong> <span contenteditable='true'>").concat(degree, "</span></p>\n        <p><strong>Institution:</strong> <span contenteditable='true'>").concat(institution, "</span></p>\n\n        <h3>Work Experience</h3>\n        <p><strong>Job Title:</strong> <span contenteditable='true'>").concat(jobTitle, "</span></p>\n        <p><strong>Company:</strong> <span contenteditable='true'>").concat(company, "</span></p>\n\n        <h3>Skills</h3>\n        <ul><span contenteditable='true'>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</span></ul>");
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to saveas PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('degree').value =
                resumeData.degree;
            document.getElementById('institution').value =
                resumeData.institution;
            document.getElementById('jobTitle').value
                = resumeData.jobTitle;
            document.getElementById('company').value
                = resumeData.company;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
