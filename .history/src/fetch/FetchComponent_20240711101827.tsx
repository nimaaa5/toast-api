
import IData from "./IData";
import useFetch from "./useFetch";


const FetchComponent = () => {
  const data:IData[] = useFetch("https://jsonplaceholder.typicode.com/todos");
 
  return (
    <>
      {
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );

}

export default FetchComponent;