// Project data
const projectData = {
    project1: {
        title: "Project 1",
        description: `
            <h2>Project 1 Title</h2>
            <img src="projects/project1.jpg" alt="Project 1 Detail" style="max-width: 100%; margin: 1rem 0;">
            <p>Detailed description of Project 1. You can add multiple paragraphs here.</p>
            <h3>Key Features:</h3>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>
            <h3>Technologies Used:</h3>
            <p>List of technologies, frameworks, or tools used in this project.</p>
        `
    },
    project2: {
        title: "Project 2",
        description: `
            <h2>Project 2 Title</h2>
            <img src="projects/project2.jpg" alt="Project 2 Detail" style="max-width: 100%; margin: 1rem 0;">
            <p>Detailed description of Project 2. You can add multiple paragraphs here.</p>
            <h3>Key Features:</h3>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>
            <h3>Technologies Used:</h3>
            <p>List of technologies, frameworks, or tools used in this project.</p>
        `
    }
};

// DOM Elements
const modal = document.getElementById('projectModal');
const modalBody = modal.querySelector('.modal-body');
const closeButton = modal.querySelector('.close-button');
const projectCards = document.querySelectorAll('.project-card');

// Event Listeners
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.dataset.project;
        openModal(projectId);
    });
});

closeButton.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Functions
function openModal(projectId) {
    const project = projectData[projectId];
    if (project) {
        modalBody.innerHTML = project.description;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
}); 