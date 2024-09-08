document.addEventListener('DOMContentLoaded', function () {
    var showHideButton = document.getElementById('show-hide-skills');
    var skillsContent = document.getElementById('skills-content');
    // Check if elements are present
    if (showHideButton && skillsContent) {
        var toggleSkills = function () {
            var isVisible = skillsContent.style.display === 'block';
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
