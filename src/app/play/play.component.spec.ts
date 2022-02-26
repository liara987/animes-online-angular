import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { SafeUrlPipe } from '../safe-url.pipe'

import { PlayComponent } from './play.component';

describe('PlayComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;

  beforeEach(async () => {
    const activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({
          id: '1',
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
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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


  it('should change url when clicking on episode', fakeAsync(() => {
    fixture.detectChanges();    
    spyOn(component, 'newEpisode');
    let btn = fixture.debugElement.query(By.css('app-episodes'));
    btn.triggerEventHandler('changeEpisode', null);
    tick();
    fixture.detectChanges();

    expect(component.newEpisode).toHaveBeenCalled();    
  }));

  it('should setVideo', () => {
    component.setVideo()
    expect(component.detail).toBeDefined()
  });
});
