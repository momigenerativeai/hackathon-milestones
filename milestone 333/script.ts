// get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Handle form submission
form.addEventListener('submit',(event: Event) => {
    event.preventDefault(); //prevent page load

    // collect input values 

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const Phone = (document.getElementById('Phone Number ') as HTMLInputElement).value
    const Education = (document.getElementById('Education') as HTMLInputElement).value
    const Experience = (document.getElementById('Experience') as HTMLInputElement).value
    const skils = (document.getElementById('Skills') as HTMLInputElement).value
    


// generate the resme content dynamically
const resmeHTML =`
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><B>Name:</b>${name}</p>
<p><b>email:</b>${email}</p>
<p><b>phone:</b>${Phone}</p>

<h3>Education</h3>
<p>${Education}</p>`;


// Display the generatd resume 
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML=resmeHTML;
}else{
    console.error('the resume display element is missing.');
}

})