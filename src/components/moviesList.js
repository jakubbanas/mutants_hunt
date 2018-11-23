import React, { Component } from "react";
import Movie from "./movie";

const movies = [
  {
    id: 0,
    image:
      "https://www.gameaxis.com/wp-content/uploads/2018/09/spider-man-hero.jpg",
    title: "Spider man",
    rating: 4
  },
  {
    id: 1,
    image:
      "https://www.gameaxis.com/wp-content/uploads/2018/09/spider-man-hero.jpg",
    title: "Spider man",
    rating: 1
  },
  {
    id: 2,
    image:
      "https://www.gameaxis.com/wp-content/uploads/2018/09/spider-man-hero.jpg",
    title: "Spider man",
    rating: 0
  },
  {
    id: 3,
    image:
      "https://www.gameaxis.com/wp-content/uploads/2018/09/spider-man-hero.jpg",
    title: "Spider man",
    rating: 2
  },
  {
    id: 4,
    image:
      "https://www.gameaxis.com/wp-content/uploads/2018/09/spider-man-hero.jpg",
    title: "Spider man",
    rating: 0
  },
  {
    id: 5,
    image:
      "https://www.gameaxis.com/wp-content/uploads/2018/09/spider-man-hero.jpg",
    title: "Spider man",
    rating: 5
  },
  {
    id: 6,
    image:
      "https://www.gameaxis.com/wp-content/uploads/2018/09/spider-man-hero.jpg",
    title: "Spider man",
    rating: 0
  }
];

class MoviesList extends Component {
  render() {
    return (
      <div className="row">
        {movies.map(movie => (
          <Movie
            key={movie.id}
            title={movie.title}
            image={movie.image}
            rating={movie.rating}
          />
        ))}
      </div>
    );
  }
}

export default MoviesList;
