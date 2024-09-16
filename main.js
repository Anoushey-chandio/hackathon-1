// Get buttons and sections
var educationButton = document.getElementById('educationButton');
var skillsButton = document.getElementById('skillsButton');
var experienceButton = document.getElementById('experienceButton');
var educationSection = document.getElementById('educationSection');
var skillsSection = document.getElementById('skillsSection');
var experienceSection = document.getElementById('experienceSection');
// Check if all elements exist before adding event listeners
if (educationButton && skillsButton && experienceButton && educationSection && skillsSection && experienceSection) {
    // Add click event for Education button
    educationButton.addEventListener('click', function () {
        educationSection.style.display = 'block';
        skillsSection.style.display = 'none';
        experienceSection.style.display = 'none';
    });
    // Add click event for Skills button
    skillsButton.addEventListener('click', function () {
        educationSection.style.display = 'none';
        skillsSection.style.display = 'block';
        experienceSection.style.display = 'none';
    });
    // Add click event for Experience button
    experienceButton.addEventListener('click', function () {
        educationSection.style.display = 'none';
        skillsSection.style.display = 'none';
        experienceSection.style.display = 'block';
    });
    // Initially hide all sections
    educationSection.style.display = 'none';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'none';
}
else {
    console.error("One or more elements are missing from the DOM.");
}
