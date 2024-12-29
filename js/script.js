function openSharePopup() {
    var shareButton = document.getElementById("shareButton");
    var popup = document.getElementById("popup");
    var linkInput = document.getElementById("linkInput");
    var copyButton = document.getElementById("copyButton");
    
    shareButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que o evento de clique seja propagado para outros elementos
        popup.style.display = "block";
        var link = this.getAttribute("data-link");
        linkInput.value = link;
    });
    
    copyButton.addEventListener("click", function(event) {
        event.stopPropagation();
        linkInput.select();
        document.execCommand("copy");
        alert("Link copiado para a área de transferência!");
    });

    // Fechar a janela pop-up quando clicar fora
    document.addEventListener("click", function(event) {
        if (!popup.contains(event.target) && event.target !== shareButton) {
            popup.style.display = "none";
        }
    });
}

async function fetchGitHubRepos() {
    const username = 'Gabzers'; // Substitua pelo seu nome de usuário do GitHub
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    const worksList = document.querySelector('.works-list');
    const featuredList = document.querySelector('.featured');

    console.log('Repos:', repos); // Log de depuração

    for (const repo of repos) {
        const readmeResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/readme`, {
            headers: { Accept: 'application/vnd.github.v3.raw' }
        });
        const readme = await readmeResponse.text();

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
                <button class="how-it-works-btn" onclick="openReadmePage('${repo.name}', '${encodeURIComponent(readme)}')">How it works</button>
            </div>
        `;
        worksList.appendChild(item);

        // Adicionar os primeiros 3 projetos na seção "Feature Works"
        if (featuredList && featuredList.children.length < 3) {
            const featuredItem = item.cloneNode(true);
            featuredList.appendChild(featuredItem);
            console.log('Added to featured:', repo.name); // Log de depuração
        }
    }
}

function openReadmePage(repoName, readmeContent) {
    const url = `single-work.html?repoName=${encodeURIComponent(repoName)}&readmeContent=${encodeURIComponent(readmeContent)}`;
    window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function() {
    fetchGitHubRepos();
    openSharePopup(); // Calls the function to open the share popup
});