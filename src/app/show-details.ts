export interface IShowDetails {
  id: number;
  name: string;
  permalink: string;
  url: string;
  description: string;
  description_source: string;
  start_date: string;
  end_date: string | null;
  country: string;
  status: string;
  runtime: number;
  network: string;
  youtube_link: string | null;
  image_path: string;
  image_thumbnail_path: string;
  rating: string;
  rating_count: string;
  countdown: string | null;
  genres: string[];
  pictures: string[];
  episodes: Episode[];
}

interface Episode {
  season: number;
  episode: number;
  name: string;
  air_date: string;
}
