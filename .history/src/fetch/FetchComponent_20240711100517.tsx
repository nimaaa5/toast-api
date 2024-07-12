
import IData from "./IData";
import useFetch from "./useFetch";


const FetchComponent = () => {
  const data:IData[] = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data);
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );

}

 FetchComponent;