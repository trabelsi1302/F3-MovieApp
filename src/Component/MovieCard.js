import ReactStars from 'react-stars'
import React, { useState } from 'react'
import { Link } from "react-router-dom"; 

const MovieCard = ({el}) => {

  return (
    <div >
    
      <h1>{el.name}</h1>
      <p>{el.description}</p>
      <img src={el.image} alt="" style={{'border-radius':'8px','border': '1px','width': '300px',height:'300px' }}/>
      <p>   {
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              value={el.rating}
              edit={false}
            />
          }</p>
      <p>{el.date}</p>
      <p>{el.seasons}</p>
      <button onClick={el.description}><Link to={`/Pfile/${el.id}`}>Show description</Link></button>
      
    </div>
  )
}

export default MovieCard
