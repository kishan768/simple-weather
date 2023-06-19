import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Tempratures from "./components/Tempratures";
import Loading from "./components/Loading";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [searchTerm, setSearchTerm] = useState("siwan");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(0);

  const fetchData = () => {
    // console.log('rerun')
    try {
      setProgress(0);
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=1&appid=3bc56fb3ebaee6191600ac36a5a1cae4`
      )
        .then((resp) => {
          setProgress(20);
          return resp.json();
        })
        .then((data) => {
          setProgress(40);
          return fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&units=metric&lon=${data[0].lon}&appid=3bc56fb3ebaee6191600ac36a5a1cae4`
          );
        })
        .then((response) => {
          setProgress(60);
          return response.json();
        })
        .then((data) => {
          setProgress(100);
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(true);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} />
      <LoadingBar color="#f11946" progress={progress} height={3} />
      {loading ? <Loading error={error} /> : <Tempratures data={data} />}
      <Footer />
    </div>
  );
}

export default App;
