import React,{useState,useEffect,useCallback} from 'react'
import { useParams } from 'react-router-dom'
import axios from './Axios'
import './MovieDetailsPage.css'
import Error from './Error'
const MovieDetailsPage = ({url}) => {
  const [movies,setMovies] = useState(null)
  const [error,setError] = useState(false)
  
  const {id}= useParams();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(url);
        const filteredMovies = request.data.results.filter((movie) => movie.id == id);

        if (filteredMovies.length === 1) {
          setMovies(filteredMovies[0]); // Set the single movie object
        }else{
          setError(true)
        }
      } catch (error) {
          setError(true)
      }
    }
    fetchData();
  }, [id, url]);
  console.log(movies)
  // Your input release date 
  const releasedateStr= String(movies?.release_date)

   console.log(releasedateStr)

  return (
    <div>
     {!error? <div>
          <h2 data-tesid="movie-title" className='movie-title'>Title:{movies?.title}</h2>
          <h5 data-testid="movie-overview"  className='movie-overview'>Description:{movies?.overview}</h5>
          
          <h5 data-testid="movie-releasedate" className='movie-releasedate'>Release Date:{movies?.release_date}</h5>
      </div>:<Error/>}

    </div>
  )
}

export default MovieDetailsPage