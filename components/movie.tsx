"use client";

import Link from "next/link";
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
    router.push(`/movies/${id}`);
  };

  return (
    <div
      className={styles.movie}
      role="button"
      tabIndex={index}
      onClick={onClick}
    >
      <img src={poster_path} alt={title} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
