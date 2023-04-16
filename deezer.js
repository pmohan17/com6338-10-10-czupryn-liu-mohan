var form = document.querySelector('form')
var h3 = document.createElement('h3')
var userInput
var URL= 'https://connect.deezer.com/oauth/auth.php?app_id=596584&redirect_uri=pmohan17.github.io/com6338-10-10-czupryn-liu-mohan&perms=basic_access,email'

//need form to submit on click
form.onsubmit = function(e) {
    e.preventDefault()
    container.innerHTML = ''
   userInput = this.search.value.trim()
   if (!userInput) return
   form.search.value = ''
}