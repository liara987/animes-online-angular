import { Component, Input } from '@angular/core';

export interface CardType {
  id: number;
  title: string;
  image: string;
  video?: string;
  width?: string;
  height?: string;
  description?: string;
  episode?: number;
  quality?: string;
  subtitle?: string;
  videoUrl?: string;
  movie?: boolean;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  Card!: CardType;
}
