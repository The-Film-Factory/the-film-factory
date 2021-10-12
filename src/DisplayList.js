import { handleDisplayData } from "./ourDbFunctions";
import { useState, useEffect } from "react";
import axios from "axios";

const DisplayList = () => {
  const [matchList, setMatchList] = useState([]);
  const [movieDB, setMovieDB] = useState([]);

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

  useEffect(() => {
    // to allow us to write asynchronous logic
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
      console.log(dbResults);
      return dbResults;
    }

    // create empty array and fill array with movies (promises)
    let newArray = [];

    for (let i = 0; i < matchList.length; i++) {
      newArray.push(
        apiCallID(
          `https://api.themoviedb.org/3/movie/${matchList[i].foreignMovie}`
        )
      );
    }
    console.log(newArray);
    // setMovieDB(newArray);

    // callback to run when all promises are fulfilled (once movies have returned)
    // Promise.all(newArray).then((allResponses) => {
    //   allResponses.forEach((response) => {
    //     // console.log(response);
    //     promiseArray.push(response.data.results);
    //   });

    //   setMovieDB(promiseArray);
    // });
  }, [matchList]);

  return (
    <div>
      <p></p>
    </div>
  );
};

export default DisplayList;
