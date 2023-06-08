import { Content } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export async function generateStaticParams() {
  const data = await fetch(
    `${process.env.THE_MOVIE_DB_API_URL}/movie/popular?api_key=${process.env.THE_MOVIE_DB_API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie: any) => ({
    slug: movie.id.toString(),
  }));
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function MovieDetail({ params }: Props) {
  const { slug } = params;
  const data = await fetch(
    `${process.env.THE_MOVIE_DB_API_URL}/movie/${slug}?api_key=${process.env.THE_MOVIE_DB_API_KEY}`
  );
  const movie = await data.json();
  console.log(movie);
  const imagePath = `${process.env.THE_MOVIE_DB_IMAGES_URL}${movie.backdrop_path}`;
  return (
    <>
      <Image
        className="w-full max-w-7xl m-auto"
        src={imagePath}
        alt={movie.title}
        width={1600}
        height={900}
        priority
      />

      <Content>
        <div className="h-full">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <h3 className="text-xl mt-1">{movie.tagline}</h3>
          </div>
          <div>
            <p className="text-xs my-1">{movie.release_date}</p>
            <p className="text-xs my-1">
              Runtime: <b className="font-bold">{movie.runtime}</b> minutes
            </p>
            <p className="text-xs-my-1">
              Rating: <b className="font-bold">{movie.vote_average}</b>
            </p>
            <p className="text-xs-my-1">
              Votes: <b className="font-bold">{movie.vote_count}</b>
            </p>
            <Badge className="my-1">{movie.status}</Badge>
          </div>
          <p className="my-4">{movie.overview}</p>
        </div>
      </Content>
    </>
  );
}
