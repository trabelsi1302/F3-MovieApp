import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
import Mv from './Mv'
import Pfile from './Pfile'

const MovieList = ({movie2,movie, SearchName , SearchDate,SearchRating}) => {
  return (
    <div className="parent">
        {movie
              .filter(
                (el) =>
                el.name.toLowerCase().includes(SearchName.toLowerCase()) || el.date ===SearchName ||el.rating ===SearchName
                
                
                
              )
           

        .map((el)=>(
          
        <MovieCard el={el} />
      
  
        
      ))}
        {movie2.map((el)=>(
          
          <MovieCard el={el} />
          
          
        
    
          
        ))}

       
        <Mv />
        
    </div>

  )
}

export default MovieList

