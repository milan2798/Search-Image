import  axios from "axios";
import {useState,useEffect} from 'react';

const count=1;
const count1=2;
const LoadImages=()=>{
  const [state, setstate] = useState([]);
  useEffect(() => {
    axios.get("https://api.unsplash.com/photos?client_id=YOUR_CLIENT_ID")
    .then((data)=>{
        setstate(data.data);
        console.log("LoadImages call");
    })
    .catch((error)=>{
       return "Invalid request LoadImages"+error;  
    })
  },[count]);
  
  return state;
}
const SearchImages=(query)=>{
  const [state, setstate] = useState([]);
  useEffect(() => {
    axios.get("https://api.unsplash.com/search/photos?query="+query+"&client_id=YOUR_CLIENT_ID")
    .then((data)=>{
        setstate(data.data.results);
        console.log("Search Images call");
    })
    .catch((error)=>{
       return "Invalid request SearchImages"+error;  
    })
  },[query]);
  
  return state;
}

export {LoadImages,SearchImages};
