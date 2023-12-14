import { useContext, useEffect, useState } from "react";
import Featured from "../../components/Featured/Featured";
import MovieList from "../../components/MovieList/MovieList";
import Navbar from "../../components/Navbar/Navbar";
import "./Homepage.scss";
import Footer from "../../components/Footer/Footer";
import { getLists } from "../../services/api";

const Homepage = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const data = await getLists(type, genre);
        setLists(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
