document.addEventListener("DOMContentLoaded", () => {
    fetch("data/articles.json")
        .then(response => response.json())
        .then(data => {
            loadCategories(data);
            if (document.getElementById("sliderContainer")) {
                loadSlider(data);
            }
            if (document.getElementById("popularNewsContainer")) {
                loadPopularNews(data);
            }
            if (document.getElementById("latestNewsContainer")) {
                loadLatestNews(data);
            }
        })
        .catch(error => console.error("Error loading articles.json:", error));

    if (document.getElementById("searchInput")) {
        document.getElementById("searchInput").addEventListener("input", searchNews);
    }
});

function loadCategories(data) {
    const categoryMenu = document.getElementById("categoryMenu");
    if (!categoryMenu) return;

    const categories = [...new Set(data.map(article => article.category))];
    categories.forEach(category => {
        const li = document.createElement("li");
        li.innerHTML = `<a class='dropdown-item' href='category.html?category=${category}'>${category}</a>`;
        categoryMenu.appendChild(li);
    });
}

function loadSlider(data) {
    const sliderContainer = document.getElementById("sliderContainer");
    if (!sliderContainer) return;

    data.slice(0, 5).forEach((article, index) => {
        const slide = document.createElement("div");
        slide.className = `carousel-item ${index === 0 ? "active" : ""}`;
        slide.innerHTML = `
            <img src="${article.image}" class="d-block w-100" alt="${article.title}">
            <div class="carousel-caption d-none d-md-block">
                <h5>${article.title}</h5>
                <p>${article.description}</p>
            </div>`;
        sliderContainer.appendChild(slide);
    });
}

function loadLatestNews(data) {
    const latestNewsContainer = document.getElementById("latestNewsContainer");
    if (!latestNewsContainer) return;

    latestNewsContainer.innerHTML = ""; // Clear previous content
    data.forEach(article => { // Show all latest news articles
        latestNewsContainer.innerHTML += createNewsCard(article);
    });
}

function loadPopularNews(data) {
    const popularNewsContainer = document.getElementById("popularNewsContainer");
    if (!popularNewsContainer) return;

    popularNewsContainer.innerHTML = ""; // Clear previous content
    const sortedArticles = data.sort((a, b) => (b.views + b.comments.length) - (a.views + a.comments.length));
    sortedArticles.forEach(article => { // Show all popular news articles
        popularNewsContainer.innerHTML += createNewsCard(article);
    });
}

function createNewsCard(article) {
    return `
        <div class="col-lg-4 col-md-4 mt-3">
            <div class="card">
                <img src="${article.image}" class="card-img-top" alt="${article.title}">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <a href="./article.html?id=${article.id}" class="btn btn-primary">Read More</a>
                    <!-- Social Media Buttons -->
                    <div class="social-buttons">
                        <a href="https://www.instagram.com/share?url=${encodeURIComponent(window.location.href)}" target="_blank" class="insta" title="Share on Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" class="share" title="Share on Facebook">
                            <i class="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
}

function searchNews(event) {
    const query = event.target.value.toLowerCase();
    fetch("data/articles.json")
        .then(response => response.json())
        .then(data => {
            const results = data.filter(article =>
                article.title.toLowerCase().includes(query) ||
                article.description.toLowerCase().includes(query) ||
                article.keywords.some(keyword => keyword.toLowerCase().includes(query))
            );
            displaySearchResults(results);
        })
        .catch(error => console.error("Error searching articles:", error));
}

function displaySearchResults(results) {
    const latestNewsContainer = document.getElementById("popularNewsContainer");
    if (!latestNewsContainer) return;

    latestNewsContainer.innerHTML = "";
    results.forEach(article => {
        latestNewsContainer.innerHTML += createNewsCard(article);
    });
}
