import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Card from './Card'
import Banner from './Banner'
import request from './request'
import MovieDetailsPage from './MovieDetailsPage'
import Footer from './Footer'
function App() {

  return (
    <div>
    
        <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Card fetchUrl={request.fetchMovies}/>}/>
                  <Route path='movies/:id' element={<MovieDetailsPage url={request.fetchMovies}/>}/>
              </Routes>
        </BrowserRouter>
      
    </div>  
  )
}

export default App
