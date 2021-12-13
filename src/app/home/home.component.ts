import { Component, OnInit } from '@angular/core';
import { CardType } from '../card/card.component';
import animes from '../animes.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: CardType[] = [];
  highlight: CardType[] = [];

  ngOnInit(): void {
    this.setCards()
  }

  setCards() {
    animes.forEach((anime, i) => {
      this.highlight[i] = {
        id: anime.id,
        title: anime.title,
        image: anime.cover,
        movie: anime.movie,
      };

      this.cards[i] = {
        id: anime.id,
        title: anime.title,
        episode: anime.episodes[0].number,
        image: anime.episodes[0].image,
        quality: anime.episodes[0].quality,
        subtitle: anime.episodes[0].subtitle,
        movie: anime.movie,
      };
    });
  }
}
