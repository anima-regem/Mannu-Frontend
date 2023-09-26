import { useEffect, useState } from "react";
import Loading from "./components/loading/Loading";
import Home from "./components/home/Home";

const fetchData = async () => {
  const response = await fetch("http://localhost:5000");
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  return response.json();
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return <Home data={data} />;
  }
};

export default App;
