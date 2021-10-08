import {useState} from 'react';
import axios from 'axios';

const InputTest = () => {
  const [searchValue, setSearchValue] = useState("");

  

  const makeQuery = () => {
    
    axios({
                url: `https://api.themoviedb.org/3/search/movie/`,
                method: "GET",
                dataResponse: "json",
                params: {
                    api_key: "686f4b568f616a8066ae90d21c06dffe",
                    query: searchValue
            },
            }).then((res) => {
                console.log(searchValue);
                let movieResults = res.data.results;
                console.log(movieResults);
            });
  }

  
  const getSearch = (e) => {
    const inputVal = e;
    setSearchValue(inputVal);
    makeQuery();
  }


  return(
    <form onSubmit={makeQuery}>
      <input type="text" value={searchValue} onChange={(e) => getSearch(e.target.value)} />
      <button>gogogogo</button>
    </form>
  )
}


export default InputTest;