async function renderAPIs(id) {
  const apiWrapper = document.querySelector(".moovies");
  const mat = document.querySelector(".no__matches")
  let matches= "fast"; 
  matches=id; 
  if( matches === undefined ){
     id = "fast";
     }
  
  
  const res = await fetch(`http://www.omdbapi.com/?apikey=234d65c1&s=${id}`);
 
  apiWrapper.classList += (" landing__overlay--loading");
  const datas = await res.json();
 
  apiWrapper.classList.remove("landing__overlay--loading");
  const search = document.querySelector('.landing__title')
  search.innerHTML=`<div class="landing__title">Search results for <for:span class="purple">${id}</for:span> </div>`



  
    
    let mooviesHTML = datas.Search.map((data) => {
      dick();
      return ` <div class="moovie">
      <div>
      <img src="${data.Poster}" class="moovie__poster" alt="">
      </div>
      <div class="moovie__title">${data.Title}</div>
      <div class="moovie__year">${data.Year}</div>
      </div>`;
    }).slice(0, 6).join("") ; 
      
    console.log(datas);
    apiWrapper.innerHTML = mooviesHTML;
    
  }
    function dick(fill){
      if (fill == 0 ) {
        // array exists and is not empty
        mat.classList+=" no__matches"
    }
    }
   

  function submit(event) {
       dick(event.totalReasults)
      renderAPIs(event.target.value);
  }
 
setTimeout(() => {
  renderAPIs();
}, 1000);

// DATA

function getAPIs() {
  //    return [
  //     {Title:"Fast & Furious 6","Year":"2013","imdbID":"tt1905041","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"},
  //     {Title:"The Fast and the Furious","Year":"2001","imdbID":"tt0232500","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},
  //     {Title:"Fast Five","Year":"2011","imdbID":"tt1596343","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"},
  //     {Title:"Fast & Furious","Year":"2009","imdbID":"tt1013752","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},
  //     {Title:"2 Fast 2 Furious","Year":"2003","imdbID":"tt0322259","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
  //     {Title:"The Fast and the Furious: Tokyo Drift","Year":"2006","imdbID":"tt0463985","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"},
  //     {Title:"Fast & Furious Presents: Hobbs & Shaw","Year":"2019","imdbID":"tt6806448","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"},
  //     {Title:"F9: The Fast Saga","Year":"2021","imdbID":"tt5433138","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"},
  //     {Title:"Fast Times at Ridgemont High","Year":"1982","imdbID":"tt0083929","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYzBlZjE1MDctYjZmZC00ZTJmLWFkOWEtYjdmZDZkODBkZmI2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"},
  //     {Title:"How to Sell Drugs Online (Fast)","Year":"2019–","imdbID":"tt9184994","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BZjIzNTkyNjktNDdmMy00MmI4LWFlN2MtNDllYTVhZjljNWFiXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg"}
  // ];
}
