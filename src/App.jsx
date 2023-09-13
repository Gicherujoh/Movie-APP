import { useState } from 'react'
import './App.css'
import Card from './Card'
import Banner from './Banner'
import request from './request'
function App() {

  return (
    <div>
      <Banner url={request.fetchMovies}/>
      <Card fetchUrl={request.fetchMovies}/>
    </div>
  )
}

export default App
