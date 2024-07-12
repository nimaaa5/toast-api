import useFetch from "./useFetch";


const FetchComponent = async () => {
  
  const data:any[] = await useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );

}