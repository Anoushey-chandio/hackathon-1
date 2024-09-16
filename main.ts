// Get buttons and sections
const educationButton = document.getElementById('educationButton') as HTMLButtonElement | null;
const skillsButton = document.getElementById('skillsButton') as HTMLButtonElement | null;
const experienceButton = document.getElementById('experienceButton') as HTMLButtonElement | null;

const educationSection = document.getElementById('educationSection') as HTMLDivElement | null;
const skillsSection = document.getElementById('skillsSection') as HTMLDivElement | null;
const experienceSection = document.getElementById('experienceSection') as HTMLDivElement | null;

// Check if all elements exist before adding event listeners
if (educationButton && skillsButton && experienceButton && educationSection && skillsSection && experienceSection) {

    // Add click event for Education button
    educationButton.addEventListener('click', () => {
        educationSection.style.display = 'block';
        skillsSection.style.display = 'none';
        experienceSection.style.display = 'none';
    });

    // Add click event for Skills button
    skillsButton.addEventListener('click', () => {
        educationSection.style.display = 'none';
        skillsSection.style.display = 'block';
        experienceSection.style.display = 'none';
    });

    // Add click event for Experience button
    experienceButton.addEventListener('click', () => {
        educationSection.style.display = 'none';
        skillsSection.style.display = 'none';
        experienceSection.style.display = 'block';
    });

    // Initially hide all sections
    educationSection.style.display = 'none';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'none';
} else {
    console.error(" elements  missing ");
}
