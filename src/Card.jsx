import React,{useState,useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from './Axios'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Card.css'
import request from './request';
import Footer from './Footer';
import Banner from './Banner';
import { Troubleshoot } from '@mui/icons-material';
import { colors } from '@mui/material';
const base_url = "https://image.tmdb.org/t/p/original/"
const Card = ({fetchUrl}) => {
    const [movies,setMovies] = useState([])
    const [favourite,setFavourite]= useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
       async function FetchData(){
         const request = await axios.get(fetchUrl)
           
         const slicedMovies = request.data.results.slice(0,12)
          setMovies(slicedMovies)
          setLoading(true)
       }
       FetchData();
    }
,[])

const handleStyle=(movieid)=>{
  //console.log(movieid)
   if(favourite.includes(movieid)){
        setFavourite(favourite.filter((id)=>id!==movieid))

   }else{
      setFavourite([...favourite,movieid])
   }
}

  return (
   <div>
     {loading? <div>
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
            <FavoriteIcon  onClick={()=>handleStyle(movie.id)} className='fav-icon' style={{color:`${favourite.includes(movie.id)? 'red':'grey'}`}} />
          </div>   
        </header>
          <div>
              <h4 data-testid="movie-title" className='movie-title'>Title: {movie.title}</h4>
              
         </div>
      </div>
                   
))
        }  
       </div>
           <Footer/>
       </div>:<p>Loading...</p>}
    </div>
  )
}

export default Card