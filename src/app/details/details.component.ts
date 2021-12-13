import { Component, Input } from '@angular/core';
export interface detailsType {
  image: string;
  sinopse: string;
  category: string;
  title: string;
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  @Input()
  data!: detailsType;
}
