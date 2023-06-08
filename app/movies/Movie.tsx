import Image from "next/image";
import Link from "next/link";

export interface MovieProps {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
}

export default function Movie({
  id,
  title,
  poster_path,
  release_date,
}: MovieProps) {
  const src = `${process.env.THE_MOVIE_DB_IMAGES_URL}${poster_path}`;
  return (
    <div>
      <Link
        href={"/movies/" + id}
        className="bg-card-foreground block p-6 rounded space-y-3"
      >
        <p className="text-xl font-bold">{title}</p>
        <p className="text-xs">{release_date}</p>
        <Image src={src} alt={title} width={800} height={800} />
      </Link>
    </div>
  );
}
