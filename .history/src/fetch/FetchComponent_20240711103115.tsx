
import IData from "./IData";
import useFetch from "./useFetch";


const FetchComponent = () => {
  const data:IData[] = useFetch("https://jsonplaceholder.typicode.com/todos");
 
  return (
    <>
      {data &&
        data.map((item:IData) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );

}

export default FetchComponent;