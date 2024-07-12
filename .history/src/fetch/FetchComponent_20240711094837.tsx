
import useFetch from "./useFetch";


const FetchComponent = () => {
  const data:any[] = useFetch("https://jsonplaceholder.typicode.com/todos");
  
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );

}

export default FetchComponent;