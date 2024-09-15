// Grabbing form and resume output elements
const Form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeDispalyElement = document.getElementById('resume-display') as HTMLDivElement;

// Add event listener to handle form submission
Form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Generate the resume output
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
        <ul><span contenteditable='true'>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</span></ul>
    `;
    if( resumeDispalyElement ){
        resumeDispalyElement .innerHTML = resumeHTML;
    }else{
        console.error('The resume display is missing');
    }


});
