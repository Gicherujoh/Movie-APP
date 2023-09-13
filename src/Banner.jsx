import React,{useState,useEffect} from 'react'
import axios from './Axios'
import {MovieCreationOutlined,Search,Person} from '@mui/icons-material'
import './Banner.css'
const Banner = ({url}) => {
    const [movie,setMovie] = useState([])
    useEffect(()=>{
        async function fetchData(){
          const request = await axios.get(url)
            setMovie(request.data.results[request.data.results.length-6])
            return request
        }
        fetchData();
    },[])
    console.log(movie)
  return (
    <div>
        <header
          className='banner'
          style={{
            backgroundSize:'cover',
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:'center center',
        
          }}
        >
          <div className='nav-bar'>
            <div className='nav-icon'>
                <MovieCreationOutlined/>
            </div>
            <div className="search-container">
              <input type="text" placeholder="Search"/>
             <i className="fa fa-search"><Search/></i>
           </div>
           <div className='nav-sign'>
            <div className='nav-signin'>
              <h3 >Sign in</h3>
            </div> 
              <div className='nav-person'>
                 <Person/>
              </div>
           </div>
          </div>
          
          <div className='banner-contents'>
             <div>
                <h2 className='banner-title' data-testid="movie-title">{movie?.title} :</h2>
             </div>
             <div className='banner-content-description'>
                <h4 className='banner-description' data-testid="movie-description">{movie?.overview}</h4>
             </div>
          </div>
          <div className='banner-button'>
             <button className='banner-button-trailer'>Watch Trailer</button>
          </div>
            
        </header>
    </div>
  )
}

export default Banner