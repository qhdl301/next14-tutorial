"use client";

import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  index: number;
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ index, title, id, poster_path }: IMovieProps) {
  const router = useRouter();

  const onClick = () => {
    router.prefetch(`/movies/${id}`);
  };

  return (
    <div
      className={styles.movie}
      role="button"
      tabIndex={index}
      onClick={onClick}
    >
      <img src={poster_path} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
