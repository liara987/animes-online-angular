import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { EpisodesComponent } from './episodes.component';

@Component({
  template: `
    <app-episodes
      (changeEpisode)="onEpisodeChange($event)">
    </app-episodes>`
})
class TestHostComponent { }

describe('EpisodesComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
