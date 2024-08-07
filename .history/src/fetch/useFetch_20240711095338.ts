import {useState, useEffect} from "react";

interface IData{
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const useFetch = (url:string): any[] => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data));
  },[url])
  return [data];
}


export default useFetch;