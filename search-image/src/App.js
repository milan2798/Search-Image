import logo from './logo.svg';
import './App.css';
import { LoadImages ,SearchImages} from "./component/api";
import  Image from "./component/image";
import {useState,useEffect} from 'react';

function App() {
  const [query, setquery] = useState("");
  const [searchq, setsearch] = useState("");

  const data=LoadImages();

  const search=()=>{
    setsearch(query);
 
  }

const  sdata=SearchImages(searchq);
  
  return (
    <div className="App">
      <div className="search">
        <input type="text"  placeholder="enter your search"  onChange={(e)=>setquery(e.target.value)}/>
        <button onClick={search}>Search</button> 
      </div>

      <div className="container"> 
      {searchq?sdata.map((img,key)=> (<Image src={img.urls.thumb} key={key}/>))
      :data.map((img,key)=> (<Image src={img.urls.thumb} key={key}/>))}
      </div>
    </div>
  );
}

export default App;
