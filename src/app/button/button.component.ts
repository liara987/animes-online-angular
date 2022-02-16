import { Component, Input } from '@angular/core';

export interface ButtonType {
  value: string;  
  width?: number;
  height?: number;
  fontSize?: number;
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
