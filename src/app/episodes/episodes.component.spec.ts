import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { CardType } from '../card/card.component';

import { EpisodesComponent } from './episodes.component';

@Component({
  template: `
    <app-episodes
      (changeEpisode)="onEpisodeChange($event)">
    </app-episodes>`
})
class TestHostComponent extends EpisodesComponent implements OnInit {
  cards: CardType[] = [];
  id!: number;
  ngOnInit(): void {
    this.id = this.getId()
    this.setEpisodes();
  }
}

describe('EpisodesComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    const activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({
          id: '1'
        })
      }
    };

    await TestBed.configureTestingModule({
      declarations: [
        EpisodesComponent,
        TestHostComponent
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
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onInit', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should get id from route', () => {
    expect(component.getId()).toBe(1)
  });

  it('should find anime by id', () => {
    const id = component.getId();
    const animeFound = component.findAnimeById(id)
    expect(animeFound.id).toBe(1)
  });

  it('should setEpisodes', () => {
    spyOn(component, 'setEpisodes');
    component.setEpisodes();
    expect(component.setEpisodes).toHaveBeenCalled();
  });

  it('should change episode on click on card', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(component, 'onEpisodeChange'); //method attached to the click.
    let btn = fixture.debugElement.query(By.css('app-card'));
    btn.triggerEventHandler('click', null);
    tick(); // simulates the passage of time until all pending asynchronous activities finish
    fixture.detectChanges();
    expect(component.onEpisodeChange).toHaveBeenCalled();
  }));
});
