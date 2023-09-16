import React,{useState,useEffect,useCallback} from 'react'
import { useParams } from 'react-router-dom'
import axios from './Axios'
import './MovieDetailsPage.css'
const MovieDetailsPage = ({url}) => {
  const [movies,setMovies] = useState(null)
  
  const {id}= useParams();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(url);
        const filteredMovies = request.data.results.filter((movie) => movie.id == id);

        if (filteredMovies.length === 1) {
          setMovies(filteredMovies[0]); // Set the single movie object
        }
      } catch (error) {
        console.error('Error fetching data:', error);
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
      <div>
          <h2 data-tesid="movie-title" className='movie-title'>Title:{movies?.title}</h2>
          <h5 data-testid="movie-overview"  className='movie-overview'>Description:{movies?.overview}</h5>
          
          <h5 data-testid="movie-releasedate" className='movie-releasedate'>Release Date:{movies?.release_date}</h5>
      </div>

    </div>
  )
}

export default MovieDetailsPage