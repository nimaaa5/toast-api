import useFetch from "./useFetch";


const FetchComponent = () => {
  
  const [data] = await useFetch("https://jsonplaceholder.typicode.com/todos");


}