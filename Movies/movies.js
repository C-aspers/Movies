
//Recherche et stockage de l'élément selector et search
var selector = document.getElementById("selector");
var search = document.getElementById("search");


var movies;
var movieSearch;
search.addEventListener("input", function(){
  showMovies(search);
})

const fetchMovies = async(input) => {
  console.log(input.value)
  const movieURL = `http://www.omdbapi.com/?s=${input.value}&apikey=${apiKeys}`
  movies = await fetch (movieURL)
  .then((response) => response.json())
}

//const fetchMoviesId = async() => {
//  //console.log(input.value)
//  const movieURL = `http://www.omdbapi.com/?i=${movieId}&apikey=${apiKeys}`
//  movies = await fetch (movieURL)
//  .then((response) => response.json())
//}


const showMovies = async(search) => {
  await fetchMovies(search);
  console.log(movies);
  if(movies.Response == 'True'){
    upDatehtml(movies)
  }
};

const upDatehtml = async(movies) => {
  selector.innerHTML = '';
  movieSearch = movies.Search;
    movieSearch.forEach((element, i) => {
      console.log(element);
      picture = element.Poster;
      title = element.Title;
      year = element.Year;
      selector.innerHTML += (
      `
      <div>
          <img class="movies-flag" src="${picture}"/>
          <h2>${title}</h2>
          <p>Date de sortie : ${year} </p>
          
        <!-- Trigger/Open The Modal -->
          <button id="myBtn">Open Modal</button>
  
          <!-- The Modal -->
          <div id="myModal${i}" class="modal">
  
            <!-- Modal content -->
            <div class="modal-content">
              <span id="close${i}" class="close">&times;</span>
              <img class="movies-flag" src="${picture}"/>
              <h2>${title}</h2>
              <p>Date de sortie : ${year} </p>
            </div>
          </div>
    
          <input class="favorite styled" id="ReadBtn${i}"
            type="button" 
            value="Read more"><br><br>
      </div>
      `
      );
    });
}

	

document.body.addEventListener('click', function ( event ) {
  for (var i = 0; i < 10; i++) {
    var modal = document.getElementById(`myModal${i}`);
    var btn = document.getElementById(`ReadBtn${i}`);
    var span = document.getElementById(`close${i}`);
    //var modal = document.getElementById("myModal");
    //var btn = document.getElementById("myPopup");
    //var span = document.getElementsByClassName("close")[0];

    if(event.target == btn) {
        modal.style.display = "block";
      }
    if(event.target == span) {
      modal.style.display = "none";
    }
    if(event.target == modal) {
      modal.style.display = "none";
    }
  }
});




/*
// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/




//
//const showMovies = async() => {
//  await fetchMovies();
//  velibFields = velibs.records;
//  velibFields.forEach(element => {
//    naMe = element.fields.name;
//    numberClassicalVelibs = element.fields.mechanical;
//    numberElectricVelibs = element.fields.ebike;
//    selector.innerHTML += (
//    `
//    <div>
//        <h2>L'affiche du film: ${naMe}</h2>
//        <h2>Le nom du film: ${naMe}</h2>
//        <p>Date de sortie : ${numberClassicalVelibs} </p>
//        <button Read more</p>
//        <br>
//    </div>
//    `
//    );
//  });
//};