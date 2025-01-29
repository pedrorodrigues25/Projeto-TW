document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.expand-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            if (details.style.display === 'block') {
                details.style.display = 'none';
            } else {
                details.style.display = 'block';
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchButton").addEventListener("click", function () {
        let searchTerm = document.getElementById("searchInput").value.trim();
        if (searchTerm) {
            highlightText(searchTerm);
        }
    });
});

function highlightText(searchTerm) {
    removeHighlights(); // Clear previous destaques
    
    let bodyContent = document.body.innerHTML;
    let regex = new RegExp(`(${searchTerm})`, "gi");
    document.body.innerHTML = bodyContent.replace(regex, '<span class="highlight">$1</span>');
}

function removeHighlights() {
    document.body.innerHTML = document.body.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/gi, "$1");
}

// CSS for destaques
document.head.insertAdjacentHTML("beforeend", `
    <style>
        .highlight {
            background-color: yellow;
            font-weight: bold;
        }
    </style>
`);

