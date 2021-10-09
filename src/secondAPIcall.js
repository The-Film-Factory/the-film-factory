import { useEffect } from "react";




useEffect(() => {

  async function getSimilarMovies(pageNumber) {
    
    const dbCall = await axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}/similar`,
      method: "GET",
      dataResponse: "json",
      params: {
          api_key: "686f4b568f616a8066ae90d21c06dffe",
          page: pageNumber
      },
    })

    const movieResults = await res;

    return movieResults;
        
  }  
  
        
  const promiseArray = [];

  const newArray = []

  for(let i = 0; i < 5; i++) {
    newArray.push(getSimilarMovies(i));
  }

  Promise.all(promiseArray)
    .then(allResponses => {
      allResponses.forEach(response => {
        newArray.push(response.data.results)
      })
    })

}, [movieID])

       






  