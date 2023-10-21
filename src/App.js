import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import NavBar from './comp/NavBar'
import Hero from './comp/Hero'
import Footer from './comp/Footer'
import { createBrowserRouter } from 'react-router-dom' 
import './App.css'


// var approuter =  createBrowserRouter{
//   path:'/',
//   element: ,
// }

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchterm, setSearchTerm] = useState([""]);
  useEffect(() => {
    if (searchterm != " ") {
      getBooks();
    }
  }, [searchterm]);
  async function getBooks(){
    const data = await fetch(`https://openlibrary.org/search.json?title=${searchterm}`);
    const json = await data.json();
    setBooks(json.docs);
    // console.log(json);  
  }

  return(
    // {
    //   (!books?)<Shimmer/>:
    // }
    <div className="books">
      <div id="inp">
        <input 
        type="text" placeholder="Search Book Here"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      {console.log(books.slice(0, 10))}
      {
      books.slice(0, 10).map((val,index) => (
        <div className="box" key={index}>
          <h1>{val.title}</h1>
          <img width="150px"
            src={`https://covers.openlibrary.org/b/id/${val.cover_i}-L.jpg`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default App;
