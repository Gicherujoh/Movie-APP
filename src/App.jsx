import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Card from './Card'
import Banner from './Banner'
import request from './request'
import MovieDetailsPage from './MovieDetailsPage'
import { MovieContextProvider } from './context'
function App() {

  return (
    <div>
      <MovieContextProvider>
        <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Card fetchUrl={request.fetchMovies}/>}/>
                  <Route path='movies/:id' element={<MovieDetailsPage url={request.fetchMovies}/>}/>
              </Routes>
        </BrowserRouter>
        </MovieContextProvider>
    </div>  
  )
}

export default App
