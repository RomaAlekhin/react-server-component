import { Content, Header } from "@/components/layout";
import Movie, { MovieProps } from "./Movie";

export default async function Movies() {
  const data = await fetch(
    `${process.env.THE_MOVIE_DB_API_URL}/movie/popular?api_key=${process.env.THE_MOVIE_DB_API_KEY}`
  );
  const res = await data.json();
  return (
    <>
      <Header title="Movies" />
      <Content>
        <div className="grid gap-6 grid-cols-fluid">
          {res.results.map((movie: MovieProps) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      </Content>
    </>
  );
}
