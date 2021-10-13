import {useEffect, useState} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MoviePair = ({match}) => {
  const [matchData, setMatchData] = useState([])
  
  
  useEffect(() => {
   
    async function apiCallID(URL) {
      const dbCall = await axios({
        url: URL,
        method: "GET",
        dataResponse: "json",
        params: {
          api_key: "686f4b568f616a8066ae90d21c06dffe",
        },
      });
      const dbResults = await dbCall;
      
      return dbResults;
    }

    // create empty array and fill array with movies (promises)
    let newArray = [];

    
      
    newArray.push(apiCallID(`https://api.themoviedb.org/3/movie/${match.englishMovie}`));
    newArray.push(apiCallID(`https://api.themoviedb.org/3/movie/${match.foreignMovie}`));
      
      
      
   
    
        // callback to run when all promises are fulfilled (once movies have returned)
         Promise.all(newArray).then((allResponses) => {
          const promiseArray = [];
          allResponses.forEach((response) => {
            
            promiseArray.push(response.data);
           
          });
          
    
          setMatchData(promiseArray)
         })
    
          
      }, [match]);
    
      return(
        <>
         
         {matchData.length > 0 ?
         <div className="pairContainer"> 
            <MovieCard
                key={matchData[0].id}
                movieKey={matchData[0].id}
                cardClass={"movieMatchEnglishCard"}
                imgClass={"imgContainer"}
                movieOgLang={matchData[0].original_language}
                movieTitle={matchData[0].title}
                moviePoster={matchData[0].poster_path}
            /> 
            <div className="likeThis">
              <p>If you like this</p>
              <p className="arrow">↩</p>
              <p>You might like this</p>
              <p className="arrow">↪</p>
            </div>
            <MovieCard
                key={matchData[1].id}
                movieKey={matchData[1].id}
                cardClass={"movieMatchForeignCard"}
                imgClass={"imgContainer"}
                movieOgLang={matchData[1].original_language}
                movieTitle={matchData[1].title}
                moviePoster={matchData[1].poster_path}
            />
          </div>
          : null}
    
        </>
      )
    }

   
    
    


        
     


export default MoviePair;