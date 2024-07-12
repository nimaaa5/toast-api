import {useState} from "react";


const useFetch = async (url:string) => {
  const [data, setData] = useState("");

  const res = await fetch(url);
  const resultData = await res.json();
  setData(resultData);
  return [data];
}


export default useFetch;