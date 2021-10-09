import { useEffect } from "react";

useEffect(() => {
  async function getSimilarMovies(pageNumber) {
    const dbCall = await axios({
      url: `https://api.themoviedb.org/3/movie/${movieID}/similar`,
      method: "GET",
      dataResponse: "json",
      params: {
        api_key: "686f4b568f616a8066ae90d21c06dffe",
        page: pageNumber,
      },
    });

    const movieResults = await res;

    return movieResults;
  }

  const promiseArray = [];

  const newArray = [];

  for (let i = 0; i < 5; i++) {
    newArray.push(getSimilarMovies(i));
  }

  Promise.all(promiseArray).then((allResponses) => {
    allResponses.forEach((response) => {
      newArray.push(response.data.results);
    });
  });
}, [movieID]);

// const movie_id = "501";

// useEffect(
//   function () {
//     const newArray = [];
//     for (let pageNum = 1; pageNum < 5; pageNum++) {
//       axios({
//         url: `https://api.themoviedb.org/3/movie/${movieID}/similar`,
//         method: "GET",
//         dataResponse: "json",
//         params: {
//           api_key: "686f4b568f616a8066ae90d21c06dffe",
//           page: pageNum,
//         },
//       }).then((res) => {
//         let movieResults = res.data.results;

//         movieResults.forEach(function (movie) {
//           if (movie.original_language !== "en") {
//             newArray.push(movie);
//           }
//         });
//         // move newArray into useEffect and set a conditional to set state at the end of the loop
//         if (pageNum === 4) {
//           setMovie(newArray);
//         }
//       });
//     }
//     // set dependency array to the useParams value
//   },
//   [movieID]
// );
