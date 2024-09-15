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
        <h1><b>Resume</b></h1>
        <h3><u>Personal Information</u></h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <h3><u>Education</u></h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Institution:</strong> ${institution}</p>

        <h3><u>Work Experience</u></h3>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${company}</p>

        <h3><u>Skills</u></h3>
        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
    `;
    if( resumeDispalyElement ){
        resumeDispalyElement .innerHTML = resumeHTML;
    }else{
        console.error('The resume display is missing');
    }


});
