import React,{useState,useEffect} from 'react'
import axios from './Axios'

import FavoriteIcon from '@mui/icons-material/Favorite';
import './Card.css'

const base_url = "https://image.tmdb.org/t/p/original/"
const Card = ({fetchUrl}) => {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
       async function FetchData(){
         const request = await axios.get(fetchUrl)
         console.log(request)
         const slicedMovies = request.data.results.slice(0,12)
          setMovies(slicedMovies)
       }
       FetchData();
    }
  
,[])
console.log(movies)
  return (
    <div>
        <h2 className='main-title'>Featured Movies</h2>
       <div className='movies'>
        
          {
             movies.length> 0&& movies.map(movie=>(
              <div> 
              <header
                 className='image'
                style={{
                backgroundSize:'cover',
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
                backgroundPosition:'center center',
        
          }}
       data-testid="movie-poster" >
          <div className='favourite'>
            <FavoriteIcon className='fav-icon'/>
          </div>   
        </header>
          <div>
              <h3 data-testid="movie-title" className='movie-title'>Title: {movie.title}</h3>
              <h3 data-testid="movie-release-date">Release Date: {movie.release_date}</h3>
         </div>
      </div>
                   
            ))
        }  
       </div>
    </div>
  )
}

export default Card