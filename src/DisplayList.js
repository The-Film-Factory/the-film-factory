import { handleDisplayData } from "./ourDbFunctions";
import { useState, useEffect } from "react";
import MoviePair from "./MoviePair";
import { Link } from "react-router-dom";

const DisplayList = () => {
  const [matchList, setMatchList] = useState([]);

  useEffect(() => {
    handleDisplayData((snapshot) => {
      const data = snapshot.val();

      const dbArray = [];
      for (let key in data) {
        dbArray.push(data[key]);
      }

      setMatchList(dbArray);
    });
  }, []);

  return (
    <div className="displayPairs">
      {matchList
        ? matchList.map((match) => {
            return <MoviePair key={match.id} match={match} />;
          })
        : null}
    </div>
  );
};

export default DisplayList;
