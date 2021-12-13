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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setEpisodeById(Number(this.route.snapshot.paramMap.get('id')))
  }

  setEpisodeById(id: number) {
    animes.forEach((anime) => {
      if (anime.id === id) {
        anime.episodes.forEach((episode) => {
          this.cards.push({
            id,
            title: anime.title,
            image: episode.image,
            episode: episode.number,
            videoUrl: episode.url,
            movie: anime.movie,
          });
        });
      }
    });
  }

  onEpisodeChange(url?: string) {
    this.changeEpisode.emit(url);
  }
}
