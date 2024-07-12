
import IData from "./IData";
import useFetch from "./useFetch";


const FetchComponent = () => {
  const data:IData[] = useFetch("https://jsonplaceholder.typicode.com/todos");
 
  return (
    <>
      {data &&
        data.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })}
    </>
  );

}

export default FetchComponent;