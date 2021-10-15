import { handleDisplayData } from "./ourDbFunctions";
import { useState, useEffect } from "react";
import MoviePair from "./MoviePair";

const DisplayList = () => {
  // empty use effect here as a memory leak plug as per class
  // we don't know how or why this works please give feedback if you do
  useEffect(()=>{return (() => {});},[]);
  
  
  const [matchList, setMatchList] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [paginatedMatchList, setPaginatedMatchList] = useState([]);

  // make call to the DB for the public matches and set them to state

  useEffect(() => {
    
    handleDisplayData((snapshot) => {
      const data = snapshot.val();
      const dbArray = [];
      for (let key in data) {
        dbArray.push(data[key]);
      }
      // reverse the array of db results so that recent results show at the top of the list
      dbArray.reverse();
      setMatchList(dbArray);
    });
  }, []);
      


  // when the results are in from the DB, cut them into pages of ten and put that cut-up array into state
  useEffect(() => {
    const numOfPages = matchList.length / 10;
    const newArray = [];
    for (let i = 0; i < numOfPages; i++) {
      if (i === 0) {
        newArray.push(matchList.slice(0, 10));
      } else {
        const begin = i * 10;
        const end = i * 10 + 10;
        newArray.push(matchList.slice(begin, end));
      }
    }
    setPaginatedMatchList(newArray);
  }, [matchList]);

  // increase page number
  const nextPageClick = () => {
    if (pageNum === paginatedMatchList.length - 1) {
      return;
    }
    setPageNum(pageNum + 1);
  };

  // decrease page number
  const previousPageClick = () => {
    if (pageNum <= 0) {
      return;
    }
    setPageNum(pageNum - 1);
  };

  // map over the array index according to the page number

  return (
    <div className="displayPairs">
      {paginatedMatchList[0] ? (
        paginatedMatchList[pageNum].map((match) => {
          return <MoviePair key={match.id} match={match} />;
        })
      ) : (
        <h3>Fetching Public Matches from the Database</h3>
      )}
      <div className="displayPage">
        <button onClick={previousPageClick}>Previous page</button>
        <p>
          {pageNum + 1} of {paginatedMatchList.length}
        </p>
        <button onClick={nextPageClick}>Next page</button>
      </div>
    </div>
  );
};

export default DisplayList;
