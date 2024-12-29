function openSharePopup() {
    var shareButton = document.getElementById("shareButton");
    var popup = document.getElementById("popup");
    var linkInput = document.getElementById("linkInput");
    var copyButton = document.getElementById("copyButton");

    if (shareButton) {
        shareButton.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevents the click event from propagating to other elements
            popup.style.display = "block";
            var link = this.getAttribute("data-link");
            linkInput.value = link;
        });
    }

    if (copyButton) {
        copyButton.addEventListener("click", function(event) {
            event.stopPropagation();
            linkInput.select();
            document.execCommand("copy");
            alert("Link copied to clipboard!");
        });
    }

    // Close the popup when clicking outside
    document.addEventListener("click", function(event) {
        if (popup && !popup.contains(event.target) && event.target !== shareButton) {
            popup.style.display = "none";
        }
    });
}

async function fetchGitHubRepos() {
    try {
        const response = await fetch('/api/github/repos');

        if (response.status === 403) {
            throw new Error('Rate limit exceeded');
        }

        const repos = await response.json();
        if (!Array.isArray(repos)) {
            throw new Error('Unexpected response format');
        }

        const worksList = document.getElementById('github-projects');
        repos.forEach(repo => {
            const item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `
                <div class="details">
                    <a href="${repo.html_url}" target="_blank"><h3>${repo.name}</h3></a>
                    <div class="item-info">
                        <div class="year-badge">${new Date(repo.created_at).getFullYear()}</div>
                        <h4>${repo.language || 'N/A'}</h4>
                    </div>
                    <p>${repo.description || 'No description available.'}</p>
                    <button class="how-it-works-btn" onclick="openReadmePage('${repo.name}')">How it works</button>
                </div>
            `;
            worksList.appendChild(item);
        });
    } catch (error) {
        console.error('Error fetching GitHub repos:', error.message);
        const worksList = document.getElementById('github-projects');
        worksList.innerHTML = '<p>Unable to fetch GitHub repositories at this time. Please try again later.</p>';
    }
}

async function openReadmePage(repoName) {
    const username = 'Gabzers'; // GitHub username
    const token = process.env.GITHUB_TOKEN; // GitHub token
    try {
        const readmeResponse = await fetch(`https://api.github.com/repos/${username}/${repoName}/readme`, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3.raw'
            }
        });

        const readmeContent = await readmeResponse.text();
        const url = `single-work.html?repoName=${encodeURIComponent(repoName)}&readmeContent=${encodeURIComponent(readmeContent)}`;
        window.location.href = url;
    } catch (error) {
        console.error('Error fetching README:', error.message);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    fetchGitHubRepos();
    openSharePopup(); // Calls the function to open the share popup
});
