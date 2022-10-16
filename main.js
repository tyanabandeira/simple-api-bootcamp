document.querySelector('#button').addEventListener('click', getPhotos)



function getPhotos() {
  let movies = document.querySelector('#text').value;
  fetch(`http://www.omdbapi.com/?apikey=179a6ab6&t=${movies}`) //making a request with the url to the server 
    .then(res => res.json()) 
    .then(data => {
      console.log(data)
      
 
  
    document.querySelector('h2').innerHTML = 'Director: ' + data.Director
    document.querySelector('h3').innerHTML = data.Genre
    document.querySelector('h4').innerHTML = 'Stars: ' + data.Actors
    document.querySelector('img').src = data.Poster
    document.querySelector('p').innerHTML = data.Plot
    //  document.querySelector('h1').innerHTML = data.Rated
  
  })
   
    .catch(err => {
      console.log(`error ${err}`)
    })
}

