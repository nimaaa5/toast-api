import {useState, useEffect} from "react";
 
import IData from "./IData";


const useFetch = (url:string): IData[] => {
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    async function fetchData(){
      const response = await fetch(url);
      const resData: IData[] = await response.json();
      setData(resData);
    }
    await fetchData();  
  },[url]);
  return data;
}


export default useFetch;