import { handleDisplayData } from "./ourDbFunctions";
import { useState, useEffect } from "react";
import axios from "axios";
import MoviePair from './MoviePair';


const DisplayList = () => {
  const [matchList, setMatchList] = useState([]);
  const [pageNum, setPageNum] = useState(0)
  const [nextPage, setNextPage] = useState([])
  useEffect(() => {
    handleDisplayData((snapshot) => {
      const data = snapshot.val();

      const dbArray = [];
      for (let key in data) {
        dbArray.push(data[key]);
      }
      // reverse the array of db results so that 
      // recent results show at the top of the list
      dbArray.reverse();
      setMatchList(dbArray);
    });
  }, []);

  const handleClick = () => {
    
    
    setPageNum(pageNum + 1)
    
    const sliceStart = pageNum + 10;
    const sliceEnd = sliceStart + 10;

    setNextPage(matchList.slice(sliceStart, sliceEnd));
  
  }

  return (
    
    
    <div className="displayPairs">
      { matchList.length > 0 && pageNum === 0 ?
      
        matchList.slice(0, 10).map((match) => {
          return(
            <MoviePair key={match.id} match={match} />
          )
        })

        : <h3>API is loading!</h3>
      
      }


      
        
      <button onClick={handleClick}>next page</button> 
        
      { pageNum > 0 ? 

        nextPage.map((match) => {
          return(
            <MoviePair key={match.id} match={match} />
          )
        })

        : <h3>API is loading!</h3>
      
      }
    </div>
  );
};

export default DisplayList;
      
