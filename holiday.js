var container = document.getElementById('holiday-app-section');
var userInput;
var URL = "https://date.nager.at/api/v3/publicholidays/2023/";
var queryString;
var fullURL = URL + queryString;
var p = document.createElement('p');
var form = document.querySelector('form');
var localStorageKey = 'holidays';

// Check if there are cached holidays in localStorage
var cachedHolidays = JSON.parse(localStorage.getItem(localStorageKey));
if (cachedHolidays) {
  renderHolidays(cachedHolidays);
}

form.onsubmit = function(e) {
    e.preventDefault();
    container.innerHTML = '';
    userInput = this.search.value.trim();
    if (!userInput) return;
    form.search.value = '';
    fullURL = URL + userInput;
    fetch(fullURL)
    .then(function(res) {
        //throw error if country isn't found
        if (res.status !== 200){
            throw new Error('Invalid Country Entry');
        }
        return res.json();
    
    })
    .then(function(data) {
        console.log(data);
        localStorage.setItem(localStorageKey, JSON.stringify(data)); // Store data in localStorage
        renderHolidays(data);
    })
    .catch(function(err) {
        var errMessage = document.createElement('h3');
        errMessage.textContent = 'Invalid Entry';
        container.appendChild(errMessage);
    });
}

function renderHolidays(holidays) {
    p.textContent = JSON.stringify(holidays);
    container.appendChild(p);
}



