import { Component, HostListener, OnInit } from '@angular/core';
import { CardType } from '../card/card.component';
import animes from '../animes.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  FIRST_ITEM_WIDTH: string | undefined;
  FIRST_ITEM_HEIGHT: string | undefined;
  OTHERS_WIDTH: string | undefined;
  OTHERS_HEIGHT: string | undefined;

  cards: CardType[] = [];
  highlight: CardType[] = [];

  public screenWidth: any;
  public screenHeight: any;

  ngOnInit(): void {
    this.getScreenSize()
    this.changeCardSizes()
    this.setCards()
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenSize()
    this.changeCardSizes()
    this.setCards()
  }

  setCards() {
    animes.forEach((anime, i) => {
      this.highlight[i] = {
        id: anime.id,
        title: anime.title,
        image: anime.cover,
        movie: anime.movie,
        width: i === 0 && !this.isMobile() ? this.FIRST_ITEM_WIDTH : this.OTHERS_WIDTH,
        height: i === 0 && !this.isMobile() ? this.FIRST_ITEM_HEIGHT : this.OTHERS_HEIGHT
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

  getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  isMobile(): boolean {
    const mobileLarge = 425
    return this.screenWidth <= mobileLarge
  }

  isTablet(): boolean {
    const tablet = 768;
    return this.screenWidth <= tablet && !this.isMobile()
  }

  isDesktop(): boolean {
    const desktop = 1440;
    return this.screenWidth > desktop
  }

  changeCardSizes() {
    const defaultSize = {
      firstItem: {
        width: '450px',
        height: '550px'
      },
      others: {
        width: this.isMobile() ? '150' : '250px',
        height: this.isMobile() ? '150' : '250px'
      }
    }

    const tabletSize = {
      firstItem: {
        width: '300px',
        height: '400px'
      },
      others: {
        width: '200px',
        height: '200px'
      }
    }

    this.FIRST_ITEM_WIDTH = this.isTablet() ? tabletSize.firstItem.width : defaultSize.firstItem.width;
    this.FIRST_ITEM_HEIGHT = this.isTablet() ? tabletSize.firstItem.height : defaultSize.firstItem.height;
    this.OTHERS_WIDTH = this.isTablet() ? tabletSize.others.width : defaultSize.others.width;
    this.OTHERS_HEIGHT = this.isTablet() ? tabletSize.others.height : defaultSize.others.width;
  }
}