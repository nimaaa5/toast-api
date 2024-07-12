import useFetch from "./useFetch";


const FetchComponent = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
}