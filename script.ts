document.addEventListener('DOMContentLoaded', () => {
    const showHideButton = document.getElementById('show-hide-skills') as HTMLButtonElement;
    const skillsContent = document.getElementById('skills-content') as HTMLElement;

    // Check if elements are present
    if (showHideButton && skillsContent) {
        const toggleSkills = () => {
            const isVisible = skillsContent.style.display === 'block';
            skillsContent.style.display = isVisible ? 'none' : 'block';
            showHideButton.textContent = isVisible ? 'Show Skills' : 'Hide Skills';
        };

        // Set initial state
        skillsContent.style.display = 'none';
        showHideButton.textContent = 'Show Skills';

        // Add event listener
        showHideButton.addEventListener('click', toggleSkills);
    }
});
