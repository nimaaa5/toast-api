import {useState, useEffect} from "react";
 
import IData from "./IData";


const useFetch = (url:string): IData[] => {
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    async function fetchData(){
      const response = await fetch(url);
      const data: IData[] = await response.json();
      setData(data);
    }
    fetchData();  
  },[url]);
  
}


export default useFetch;