import { useEffect, useState } from "react";
import axios from "axios";
import Featured from "../../components/Featured/Featured";
import MovieList from "../../components/MovieList/MovieList";
import Navbar from "../../components/Navbar/Navbar";
import "./Homepage.scss";

const Homepage = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmNmMjhkYjJiZDJlZWI0ODkwYzdmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMTYzOTAzNSwiZXhwIjoxNzAyMDcxMDM1fQ.NzYKOsb5gQ9_OxPWyGYHFqaENHBAJPjV2DBmHXoYhkc",
            },
          }
        );
        setLists(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.length > 0 &&
        lists.map((list) => <MovieList key={list._id} list={list} />)}
    </div>
  );
};

export default Homepage;
