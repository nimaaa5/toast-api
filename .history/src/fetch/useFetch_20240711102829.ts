import {useState, useEffect} from "react";
 
import IData from "./IData";


const useFetch = (url:string): IData[] => {
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data));
  },[url]);
  return [data];
}


export default useFetch;