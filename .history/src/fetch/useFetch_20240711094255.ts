import {useState, useEffect} from "react";


const useFetch = (url:string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData(){
      const res = await fetch(url);
      const resultData = await res.json();
      setData(resultData);
    }

    fetchData();
  },[url])
  return [data];
}


export default useFetch;