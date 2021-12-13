import { Component, Input } from '@angular/core';

export interface ButtonType {
  type: string;
  value: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  Button!: ButtonType;
}
