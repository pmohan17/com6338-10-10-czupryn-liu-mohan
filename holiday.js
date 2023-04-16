var container = document.getElementById('holiday-app-section')
var userInput
var URL = "https://date.nager.at/api/v3/publicholidays/2023/"
var queryString 
var fullURL = URL + queryString
var p = document.createElement('p')
var form = document.querySelector('form')

form.onsubmit = function(e) {
    e.preventDefault()
    container.innerHTML = ''
   userInput = this.search.value.trim() 
   if (!userInput) return
    form.search.value = ''
    fullURL = URL + userInput
    fetch(fullURL)
    .then(function(res) {
        //throw error if country isn't found
        if (res.status !== 200){
            throw new Error('Invalid Country Entry')
        }
        return res.json()
    
})
.then(function(data) {
    console.log(data)
    p.textContent = JSON.stringify(data)
        container.appendChild(p)
})
.catch(function(err) {
    var errMessage = document.createElement('h3')
    errMessage.textContent = 'Invalid Entry'
        container.appendChild(errMessage)
    })
}


