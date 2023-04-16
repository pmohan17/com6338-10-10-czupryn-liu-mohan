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
    // Do something with the data (e.g. display headlines)
    data.articles.forEach(article => {
      console.log(article.title);
    });
  })
  .catch(error => {
    console.error(error);
  });
