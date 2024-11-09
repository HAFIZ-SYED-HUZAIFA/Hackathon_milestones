// Get references to the form and display area

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeoutput = document.getElementById('resume-output') as HTMLDivElement

// Handle form submission

form.addEventListener('submit',(event: Event) => {
    event.preventDefault();

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone number') as HTMLInputElement).value
    const degree = (document.getElementById('degree') as HTMLInputElement).value
    const institutionname = (document.getElementById('institution name') as HTMLInputElement).value
    const graduationdate = (document.getElementById('graduation date') as HTMLInputElement).value
    const jobtitle = (document.getElementById('job title') as HTMLInputElement).value
    const companyname = (document.getElementById('company name') as HTMLInputElement).value
    const achievements = (document.getElementById('achievements') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate the resume content dynamically
    const resumedisplay = `
    <h1><b> RESUME FORM </b></h1>
    <h2>Personal Information</h2>
    <p><b>Name:</b>${name}
    <p><b>Email:</b>${email}
    <p><b>Phone Number:</b>${phone}

    <h2>Education Details</h2>
    <p><b>Degree:</b>${degree}
    <p><b>Institution Name:</b>${institutionname}
    <p><b>Graduation Date:</b>${graduationdate}

    <h2>Work Experience</h2>
    <p><b>Job Title:</b>${jobtitle}
    <p><b>Company Name:</b>${companyname}
    <p><b>Achievements:</b>${achievements}

    <h2>Skills</h2>
    <p><b>Skills:</b>${skills}
    `;

    if(resumeoutput){
    resumeoutput.innerHTML = resumedisplay
    }else{
        console.error('The resume display element is missing.')
    }
})