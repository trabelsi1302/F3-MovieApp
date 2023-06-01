import { useState } from 'react';
import ReactModal from "react-modal";
const Adds = ({addHandler}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");
    const [type, setType] = useState("");
    const [season, setSeason] = useState("");
    const [show,setShow] = useState(false);
    const open=()=>{
        setShow(true);
    }
    const close =()=>{
        setShow(false);
    }
   
  return (
    <div>
       <button onClick={open}>add filme</button>
    
       <ReactModal isOpen={show}>
        

       
      <form >
          <label>Movie Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
                    <label>Movie Release Date</label>
          <input
            type="number"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Movie Image</label>
          <input
            type="text"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Movie Type</label>
          <input
            type="text"
            name="type"
            onChange={(e) => setType(e.target.value)}
          />
          <label>Movie Season</label>
          <input
            type="text"
            name="season"
            onChange={(e) => setSeason(e.target.value)}
          />
          <div className="rating-search">
            <label>Movie rating</label>
            <input type="text" onChange={(e) => setRating(e.target.value)} />
          </div>
          <label>Movie Summary</label>
          <textarea
            type="text"
            name="description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={(e)=>{e.preventDefault(); addHandler({
        id: Math.random(),
    name,
    description,
    date,
    rating,
    image,
    type,
})}}>Submit</button>
<button onClick={close}>close</button>
          </form>
          </ReactModal>
    </div>
  )
}

export default Adds
