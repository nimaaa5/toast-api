import {useState, useEffect} from "react";
 
import IData from "./IData";


const useFetch = (url:string): IData[] => {
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    const fetchData = () => {
      const response = await fetch(url);
      const resData: IData[] = await response.json();
      setData(resData);
    }
    fetchData();  
  },[url]);
  return data;
}


export default useFetch;