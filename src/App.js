
import './App.css';
import Movies from "./Component/Movies"
import React, { useState } from 'react'
import MovieList from "./Component/MovieList"
import MovieCard from './Component/MovieCard';
import AddMovies from './Component/AddMovies';
import Adds from './Component/Adds';
import SearchBarss from './Component/SearchBarss'
import { Movies2 } from './Component/Movies2';
import Mv from './Component/Mv';
import NavBars from './Component/NavBars';
import { Route, Routes } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Profile from './Component/Pfile';
import Pfile from './Component/Pfile';




function App() {
  const addHandler = (newMovie) => {
    setMovie([...movie, newMovie]);
  };
  const [movie, setMovie] = useState(Movies)
  const [searchName, setSearchName] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [movie2,setMovie2]=useState(Movies2);
  

  const [searchrating, setSearchrating] = useState("");
  return (
    <div className="App">

        <NavBars />
        <Routes>  
          <Route path="/" element={   <MovieList mv={Mv} movie={movie} movie2={Movies2} SearchName={searchName} SearchDate={searchDate} SearchRating={searchrating} /> 
} />

        </Routes>
   <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Pfile/:id" element={<Pfile />} />

        
    </Routes>


         <SearchBarss
        setSearchName={setSearchName}
        setSearchDate={setSearchDate}
        setSearchrating={setSearchrating}
      />
     
   <br/>
  
  
  
   <Adds addHandler={addHandler}/>
  
  <Mv />



   

     
     
     
     
     
     
     
     
     
     
     
     
     

    </div>

  );
}

export default App;
