import { useEffect, useState } from "react";
import axios from "axios";
import Featured from "../../components/Featured/Featured";
import MovieList from "../../components/MovieList/MovieList";
import Navbar from "../../components/Navbar/Navbar";
import "./Homepage.scss";
import Footer from "../../components/Footer/Footer";

const Homepage = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const response = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmNiZThmNTM4M2Q2OWU1MDUyZjY2ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMjIzMDYxNiwiZXhwIjoxNzAyNjYyNjE2fQ.Hisl7wJZjGroh0hufUKT9zZ0iJ21PSjqLQ_HmACb0sQ",
            },
          }
        );
        setLists(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.length > 0 &&
        lists.map((list) => <MovieList key={list._id} list={list} />)}
      <Footer />
    </div>
  );
};

export default Homepage;
