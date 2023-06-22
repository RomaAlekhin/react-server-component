import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  const imagePath = `${process.env.THE_MOVIE_DB_IMAGES_URL}${poster_path}`;

  return (
    <Link href={"/movies/" + id}>
      <Card>
        <CardHeader>
          <CardTitle>
            <p className="text-xl font-bold">{title}</p>
          </CardTitle>

          <CardDescription>
            <p className="text-xs">{release_date}</p>
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0 rounded-b-lg overflow-hidden">
          <Image src={imagePath} alt={title} width={800} height={800} />
        </CardContent>
      </Card>
    </Link>
  );
}
