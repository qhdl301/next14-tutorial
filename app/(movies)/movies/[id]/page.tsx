import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type ParamsType = Promise<{ id: string }>;

// 예약어
export async function generateMetadata(props: { params: ParamsType }) {
  const params = await props.params;
  const id = params.id;
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage(props: { params: ParamsType }) {
  const params = await props.params;
  const id = params.id;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
