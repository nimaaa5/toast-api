import {useState} from "react";


const useFetch = async (url:string) => {


  const res = await fetch(url);
  const data = await res.json();
  return [data];
}


export default useFetch;