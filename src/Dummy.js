import {useParams} from 'react-router-dom';

const Dummy = () => {
  const {movieID} = useParams
  
  return(
    <h2>Success!!{movieID}</h2>
  )
}

export default Dummy