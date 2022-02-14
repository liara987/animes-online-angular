import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import {SafeUrlPipe} from '../safe-url.pipe'

import { PlayComponent } from './play.component';

describe('PlayComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;

  beforeEach(async () => {
    const activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({
          id: 'dads123',
          code: 'IBM',
        })
      }
    };

    await TestBed.configureTestingModule({
      declarations: [
        PlayComponent,
        SafeUrlPipe
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteSpy
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
