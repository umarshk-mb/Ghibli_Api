/*Before we try to put anything on the front end of the website, let's open a connection the API. We'll do so using XMLHttpRequest objects, 
which is a way to open files and make an HTTP request.*/

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET','https://ghibliapi.herokuapp.com/films',true)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if(request.status >= 200 && request.status < 400){
        data.forEach(movie =>{
            //console.log(movie.title)

            //building frontend to display API data on HTML elements.
            const card = document.createElement('div')
            card.setAttribute('class','card')

            const h1 = document.createElement('h1')
            h1.textContent = movie.title

            const p = document.createElement('p')
            movie.description = movie.description.substring(0,300)
            p.textContent = `${movie.description}...`

            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(p)
        })
    }
    else{
        console.log('error')
    }
}
//sending request
request.send()


//building frontend using js.
const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class','container')

app.appendChild(logo)
app.appendChild(container)

