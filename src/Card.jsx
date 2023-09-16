import React,{useState,useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from './Axios'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Card.css'
import { movieContext } from './context';
import request from './request';
import Banner from './Banner';
import { Troubleshoot } from '@mui/icons-material';
import { colors } from '@mui/material';
const base_url = "https://image.tmdb.org/t/p/original/"
const Card = ({fetchUrl}) => {
    const [movies,setMovies] = useState([])
    const [isClick,setClick]= useState(false)
    useEffect(()=>{
       async function FetchData(){
         const request = await axios.get(fetchUrl)
           
         const slicedMovies = request.data.results.slice(0,12)
          setMovies(slicedMovies)
       }
       FetchData();
    }
,[])

  window.addEventListener('click',()=>{
   setClick(!isClick)
   style={
      color:'red'
   }

  });
  return (
    <div>
         <Banner url={request.fetchMovies}/>
        <h2 className='main-title'>Featured Movies</h2>
       <div className='movies'>
        
          {
             movies.length> 0&& movies.map(movie=>(
              <div> 
              <header
                 className='image'
                style={{
                  backgroundSize:'cover',
                  backgroundPosition:'center center',
                  backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.poster_path}") `,
                  cursor:'pointer',
                 
                }}
                key={movie.id}
               
       data-testid="movie-poster" >
          <div className='favourite'>
            <FavoriteIcon className='fav-icon'/>
          </div>   
        </header>
          <div>
              <h4 data-testid="movie-title" className='movie-title'>Title: {movie.title}</h4>
              
         </div>
      </div>
                   
))
        }  
       </div>
    </div>
  )
}

export default Card