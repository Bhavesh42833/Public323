
import './App.css';
import React, {useState, useEffect } from 'react';
import axios from "axios";
function App() {
  const [data , setData] = useState([]);
  const[Author, setAuthor] = useState();
  const[Quote, setQuote] = useState();
  const[randomIndex, setRandomIndex] = useState();
 
  useEffect(() =>{
    axios.get("https://random-quote-generator-u26y.onrender.com/")
    .then((res) =>{ setData(res.data);
   setRandomIndex(Math.floor(Math.random() * res.data.length));})}
,[]);

  const HandleSubmit = async () => {
    try{
      axios.post("https://random-quote-generator-u26y.onrender.com/",{
        "quote": Quote,
        "author":Author 
      }
      ).then(() => {window.location.reload(true)});
    }
    catch{
      alert("Error");
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
        </style>
        <h1 className='Heading'>Random Quote Generator</h1>
        <h3 className='Quote'>Quote:{<div>{data[randomIndex].quote}</div>}</h3>
        <h3 className='Author'>Author:{<div>{data[randomIndex].author}</div>}</h3>
        <br></br>
        <h2>Contribute to the Quotes Magazine!</h2>
        <div>
          <label>Quote :</label>
          <input onChange={(e) => (setQuote(e.target.value))}/>
       </div>
       <div>
          <label>Author :</label>
          <input onChange={(e) => (setAuthor(e.target.value))}/>
       </div>      
        <button className='Generator' onClick={HandleSubmit}>Submit</button>

      </header>
    </div>
  );
}

export default App;
