import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardType } from '../card/card.component';
import animes from '../animes.json';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  @Output() changeEpisode = new EventEmitter<string>();
  cards: CardType[] = [];
  id!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.getId()
    this.setEpisodes();
  }

  setEpisodes() {
    const anime = this.findAnimeById(this.id);

    anime.episodes
      .map((ep: any) => {
        this.cards.push({
          id: anime.id,
          title: anime.title,
          cover: ep.image,
          episode: ep.number,
          videoUrl: ep.url,
          movie: anime.movie,          
        });
      })
  }

  onEpisodeChange(url?: string) {
    this.changeEpisode.emit(url);
  }

  findAnimeById(id: number) {
    return animes
      .filter((anime => anime.id === id))
      .reduce((obj: any, item: any) => Object.assign(obj, {
        ...item
      }), {})
  }

  getId() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return id
  }
}