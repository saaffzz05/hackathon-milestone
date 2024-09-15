// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as
HTMLDivElement;

const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;

const shareableLinkElement = document.getElementById('shareable-link') as
HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as
HTMLButtonElement;
// Handle form submission
form.addEventListener('submit', (event: Event) => {
event.preventDefault(); // prevent page reload
// Collect input values
const username = (document.getElementById('username') as
HTMLInputElement).value;
const name = (document.getElementById('name') as HTMLInputElement).value;
const email = (document.getElementById('email') as HTMLInputElement).value;
const degree = (document.getElementById('degree') as
HTMLTextAreaElement).value;
const institution = (document.getElementById('institution') as
HTMLTextAreaElement).value;
const jobTitle = (document.getElementById('jobTitle') as
HTMLTextAreaElement).value;
const company = (document.getElementById('company') as
HTMLTextAreaElement).value;
const skills = (document.getElementById('skills') as
HTMLTextAreaElement).value.split(',');
// Save form data in localStorage with the username as the key
const resumeData = {
name,
email,
institution,
jobTitle,
skills
};
localStorage.setItem(username, JSON.stringify(resumeData)); // Saving thedata locally
// Generate the resume content dynamically

const resumeHTML = `
      <h1><b> Editable Resume</b></h1>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong><span contenteditable='true'>${name}</span></p>
        <p><strong>Email:</strong> <span contenteditable='true'>${email}</span></p>

        <h3>Education</h3>
        <p><strong>Degree:</strong> <span contenteditable='true'>${degree}</span></p>
        <p><strong>Institution:</strong> <span contenteditable='true'>${institution}</span></p>

        <h3>Work Experience</h3>
        <p><strong>Job Title:</strong> <span contenteditable='true'>${jobTitle}</span></p>
        <p><strong>Company:</strong> <span contenteditable='true'>${company}</span></p>

        <h3>Skills</h3>
        <ul><span contenteditable='true'>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</span></ul>`;


// Display the generated resume
resumeDisplayElement.innerHTML = resumeHTML;
// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;
// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to saveas PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value =
username;
(document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('degree') as HTMLTextAreaElement).value =
resumeData.degree;
(document.getElementById('institution') as HTMLTextAreaElement).value =
resumeData.institution;
(document.getElementById('jobTitle') as HTMLTextAreaElement).value
= resumeData.jobTitle;
(document.getElementById('company') as HTMLTextAreaElement).value
= resumeData.company;
(document.getElementById('skills') as HTMLTextAreaElement).value =
resumeData.skills;
}
}
});