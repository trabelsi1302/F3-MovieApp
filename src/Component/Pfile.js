import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import {Movies} from "./Movies"


const Pfile = () => {
    const { id } = useParams();
    const movie=Movies.find((el)=>(el.id===Number(id)))
  return (
    <div>
     <p>{movie.id}</p>
     <h1>{movie.description}</h1>
     <p>{movie.title}</p>
     
     <iframe width="560" height="315" src={movie.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Pfile
