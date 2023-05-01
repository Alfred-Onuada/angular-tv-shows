import { Injectable } from '@angular/core';
import { IShows } from './shows';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IShowDetails } from './show-details';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  private shows: IShows[] = [
    {
      "id": 35624,
      "name": "The Flash",
      "country": "US",
      "network": "The CW",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/35624.jpg"
    },
    {
      "id": 23455,
      "name": "Game of Thrones",
      "country": "US",
      "network": "HBO",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
    },
    {
      "id": 29560,
      "name": "Arrow",
      "country": "US",
      "network": "The CW",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/29560.jpg"
    },
    {
      "id": 43467,
      "name": "Lucifer",
      "country": "US",
      "network": "Netflix",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/43467.com"
    },
    {
      "id": 43234,
      "name": "Supergirl",
      "country": "US",
      "network": "The CW",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/43234.jpg"
    },
    {
      "id": 46692,
      "name": "DC's Legends of Tomorrow",
      "country": "US",
      "network": "The CW",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/46692.jpg"
    },
    {
      "id": 24010,
      "name": "The Walking Dead",
      "country": "US",
      "network": "AMC+",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/24010.jpg"
    },
    {
      "id": 46778,
      "name": "Stranger Things",
      "country": "US",
      "network": "Netflix",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/46778.jpg"
    },
    {
      "id": 47145,
      "name": "Dragon Ball Super",
      "country": "JP",
      "network": "Fuji TV",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/47145."
    },
    {
      "id": 52439,
      "name": "Boku no Hero Academia",
      "country": "JP",
      "network": "MBS",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/52439.jpg"
    },
    {
      "id": 33514,
      "name": "The 100",
      "country": "US",
      "network": "The CW",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/33514.jpg"
    },
    {
      "id": 22410,
      "name": "Sherlock",
      "country": "UK",
      "network": "BBC One",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/22410.jpg"
    },
    {
      "id": 5348,
      "name": "Supernatural",
      "country": "US",
      "network": "The CW",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/5348.jpg"
    },
    {
      "id": 8362,
      "name": "The Big Bang Theory",
      "country": "US",
      "network": "CBS",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/8362.jpg"
    },
    {
      "id": 31452,
      "name": "Marvel's Agents of S.H.I.E.L.D.",
      "country": "US",
      "network": "ABC",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/31452.jpg"
    },
    {
      "id": 37444,
      "name": "Marvel's Daredevil",
      "country": "US",
      "network": "Netflix",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/37444.jpg"
    },
    {
      "id": 29977,
      "name": "Vikings",
      "country": "CA",
      "network": "History",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/29977.jpg"
    },
    {
      "id": 29671,
      "name": "Gotham",
      "country": "US",
      "network": "FOX",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/29671.png"
    },
    {
      "id": 36210,
      "name": "Westworld",
      "country": "US",
      "network": "HBO",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/36210.jpg"
    },
    {
      "id": 32157,
      "name": "Rick and Morty",
      "country": "US",
      "network": "Adult Swim",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/32157.jpg"
    },
    {
      "id": 49269,
      "name": "Miraculous LadyBug",
      "country": "FR",
      "network": "TF1",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/49269.jpg"
    },
    {
      "id": 56202,
      "name": "Boruto: Naruto Next Generations",
      "country": "JP",
      "network": "TV Tokyo",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/56202.jpg"
    },
    {
      "id": 33784,
      "name": "The Blacklist",
      "country": "US",
      "network": "NBC",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/33784.jpg"
    },
    {
      "id": 40974,
      "name": "Mr. Robot",
      "country": "US",
      "network": "USA Network",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/40974.jpg"
    },
    {
      "id": 48879,
      "name": "One-Punch Man",
      "country": "JP",
      "network": "TV Tokyo",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/48879.jpg"
    },
    {
      "id": 44187,
      "name": "Riverdale",
      "country": "US",
      "network": "The CW",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/44187.jpg"
    },
    {
      "id": 59001,
      "name": "Black Clover",
      "country": "JP",
      "network": "TV Tokyo",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/59001.jpg"
    },
    {
      "id": 26416,
      "name": "Suits",
      "country": "US",
      "network": "USA Network",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/26416.jpg"
    },
    {
      "id": 43041,
      "name": "Blindspot",
      "country": "US",
      "network": "NBC",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/43041."
    },
    {
      "id": 32919,
      "name": "The Originals",
      "country": "US",
      "network": "The CW",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/32919.jpg"
    },
    {
      "id": 34496,
      "name": "Brooklyn Nine-Nine",
      "country": "US",
      "network": "NBC",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/34496.jpg"
    },
    {
      "id": 26472,
      "name": "Teen Wolf",
      "country": "US",
      "network": "MTV",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/26472.png"
    },
    {
      "id": 37445,
      "name": "Marvel's Jessica Jones",
      "country": "US",
      "network": "Netflix",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/37445.jpg"
    },
    {
      "id": 31617,
      "name": "Steven Universe",
      "country": "US",
      "network": "Cartoon Network",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/31617.jpg"
    },
    {
      "id": 37446,
      "name": "Marvel's Iron Fist",
      "country": "US",
      "network": "Netflix",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/37446.jpg"
    },
    {
      "id": 55359,
      "name": "The Good Doctor",
      "country": "US",
      "network": "ABC",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/55359.jpg"
    },
    {
      "id": 57910,
      "name": "The Witcher",
      "country": "US",
      "network": "Netflix",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/57910.jpg"
    },
    {
      "id": 37447,
      "name": "Marvel's Luke Cage",
      "country": "US",
      "network": "Netflix",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/37447.jpg"
    },
    {
      "id": 39706,
      "name": "Marvel's The Defenders",
      "country": "US",
      "network": "Netflix",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/39706.jpg"
    },
    {
      "id": 4837,
      "name": "Prison Break",
      "country": "US",
      "network": "FOX",
      "image_thumbnail_path": "https://static.episodate.com/images/tv-show/thumbnail/4837.jpg"
    }
  ];

  constructor(private http: HttpClient) { }

  getShowsCount(): number {
    return this.shows.length;
  }

  getShows(pageNo?: number): IShows[] {
    pageNo = typeof pageNo == 'undefined' ? 0 : pageNo - 1;
  
    let start = pageNo * 20;
    let end = start + 20;

    return this.shows.slice(start, end);
  }

  findShows(query: string): IShows[] {
    return this.shows.filter(show => show.name.toLowerCase().includes(query.toLowerCase()));
  }

  getShow(id: number): Observable<IShowDetails> {
    return this.http.get(`https://www.episodate.com/api/show-details?q=${id}`).pipe(
      map((show: any) => show.tvShow)
    )
  }
}
