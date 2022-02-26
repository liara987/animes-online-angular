import { Component, OnInit } from '@angular/core';
import { CardType } from '../card/card.component';
import animes from '../animes.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  cards: CardType[] = [];

  ngOnInit(): void {
    this.setCards()
  }

  setCards() {
    animes.forEach((anime, i) => {
      this.cards[i] = {
        id: anime.id,
        title: anime.title,
        cover: anime.cover,
      };
    });
  }
}
