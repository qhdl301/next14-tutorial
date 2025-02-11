import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constans";

export const metadata = {
  title: "Home",
};

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}`);
  const json = await response.json();
  return json;
};

const HomePage = async () => {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie, index) => (
        <Movie
          key={movie.id}
          id={movie.id}
          index={index}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
};

export default HomePage;
