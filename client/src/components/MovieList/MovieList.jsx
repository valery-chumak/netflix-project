import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import "./MovieList.scss";
import MovieItem from "../MovieItem/MovieItem";
import { useRef, useState } from "react";

const MovieList = () => {
  const [slide, setSlide] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slide > 0) {
      setSlide(slide - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    } else if (direction === "right" && slide < 5) {
      setSlide(slide + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="list-title">Continue to watch</span>
      <div className="wrapper">
        {isMoved && (
          <ArrowBackIosOutlined
            className="slider-arrow left"
            onClick={() => handleClick("left")}
          />
        )}
        <div className="movies-container" ref={listRef}>
          <MovieItem index={0} />
          <MovieItem index={1} />
          <MovieItem index={2} />
          <MovieItem index={3} />
          <MovieItem index={4} />
          <MovieItem index={5} />
          <MovieItem index={6} />
          <MovieItem index={7} />
          <MovieItem index={8} />
          <MovieItem index={9} />
        </div>

        <ArrowForwardIosOutlined
          className="slider-arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default MovieList;