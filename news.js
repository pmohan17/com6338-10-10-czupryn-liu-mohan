// Define API endpoint
const apiEndpoint = 'https://gnews.io/api/v4/top-headlines';

// Define API key (replace with your own)
const apiKey = 'e5995fc611ea683a51fed25473622621';

// Define search query parameters
const params = {
  country: 'us', // Country code (e.g. us, gb, ca)
  lang: 'en', // Language (optional)
  max: 10, // Maximum number of results (optional)
  token: apiKey // API key
};

// Construct API URL
const apiUrl = `${apiEndpoint}?${new URLSearchParams(params).toString()}`;

// Make API request
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('headlines', JSON.stringify(data.articles));
      renderHeadlines(data.articles);
    })
    .catch(error => {
      console.error(error);
    });

function renderHeadlines(articles) {
  headlines.innerHTML = '';
  articles.forEach(article => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = article.url;
    a.textContent = article.title;
    li.appendChild(a);
    headlines.appendChild(li);
  });
}

// Check if there are cached headlines in localStorage
const cachedHeadlines = JSON.parse(localStorage.getItem('headlines'));
if (cachedHeadlines) {
  renderHeadlines(cachedHeadlines);
}
