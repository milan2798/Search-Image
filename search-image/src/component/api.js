import  axios from "axios";
import {useState,useEffect} from 'react';

const count=1;
const count1=2;
const LoadImages=()=>{
  const [state, setstate] = useState([]);
  useEffect(() => {
    axios.get("https://api.unsplash.com/photos?client_id=RBIT2koapxwBkrfNRx6Og8NL7NbnYav8xuxYJb05SSw")
    .then((data)=>{
        setstate(data.data);
        console.log("LoadImages");
    })
    .catch((error)=>{
       return "Invalid request para"+error;  
    })
  },[count]);
  
  return state;
}
const SearchImages=(query)=>{
  const [state, setstate] = useState([]);
  useEffect(() => {
    axios.get("https://api.unsplash.com/search/photos?query="+query+"&client_id=RBIT2koapxwBkrfNRx6Og8NL7NbnYav8xuxYJb05SSw")
    .then((data)=>{
        setstate(data.data.results);
        console.log(data);
    })
    .catch((error)=>{
       return "Invalid request para"+error;  
    })
  },[query]);
  
  return state;
}

export {LoadImages,SearchImages};