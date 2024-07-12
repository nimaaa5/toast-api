import {useState, useEffect} from "react";


const useFetch = (url:string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const res = await fetch(url);
    const resultData = await res.json();
    setData(resultData);
  })
  return [data];
}


export default useFetch;