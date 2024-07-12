


const useFetch = async (url) => {
  const res = await fetch(url);
  res.json();
}