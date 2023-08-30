import { Component, HostListener, OnInit } from '@angular/core';
import { CardType } from '../card/card.component';
import animes from '../animes.json';

interface SizeType {
  firstItem: {
    width: number,
    height: number,
  },
  others: {
    width: number,
    height: number,
  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public slides = [
    { src: "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/e10063f7-f399-4dfb-be2e-5af13aefbc9b.webp" },
    { src: "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/d416acb5-c6c0-41c6-9bb7-c1fa9f53961a.webp" },
    { src: "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/e97016e0-ada6-4ccc-8ace-82b2e783d454.webp" },
    { src: "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/d23108ca-f0f0-48d0-9a7d-454592c5fa22.webp" },
    { src: "https://static.crunchyroll.com/fms/landscape_poster/960x540/100/png/a81aabd2-f610-4fe8-bfe3-1ee576aab3c8.webp" },
  ];

  tabletSize: SizeType = {
    firstItem: {
      width: 300,
      height: 400
    },
    others: {
      width: 200,
      height: 200
    }
  }

  sizes: SizeType = {
    firstItem: {
      width: 450,
      height: 550
    },
    others: {
      width: 250,
      height: 250
    }
  };

  cards: CardType[] = [];
  highlight: CardType[] = [];

  ngOnInit(): void {
    this.changeCardSizes()
    this.setCards()
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.changeCardSizes()
    this.setCards()
  }

  setCards() {
    animes.forEach((anime, i) => {
      this.highlight[i] = {
        id: anime.id,
        title: anime.title,
        cover: anime.cover,
        movie: anime.movie,
        width: i === 0 && !this.isMobile() ? this.sizes.firstItem.width : this.sizes.others.width,
        height: i === 0 && !this.isMobile() ? this.sizes.firstItem.height : this.sizes.others.height
      };

      this.cards[i] = {
        id: anime.id,
        title: anime.title,
        episode: anime.episodes[0].number,
        cover: anime.episodes[0].image,
        quality: anime.episodes[0].quality,
        subtitle: anime.episodes[0].subtitle,
        movie: anime.movie,
      };
    });
  }

  getInnerWidth() {
    return window.innerWidth;
  }

  isMobile(): boolean {
    const mobileLarge = 425
    return this.getInnerWidth() <= mobileLarge
  }

  isTablet(): boolean {
    const tablet = 768;
    return this.getInnerWidth() <= tablet && !this.isMobile()
  }

  changeCardSizes() {
    if (this.isTablet()) {
      this.sizes = {
        ...this.tabletSize
      }
    } else if (this.isMobile()) {
      this.sizes = {
        ...this.sizes,
        others: {
          width: 150,
          height: 150
        }
      }
    }
  }
}