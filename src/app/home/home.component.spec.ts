import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be mobile', () => {
    spyOn(component, 'getInnerWidth').and.returnValue(425);
    fixture.detectChanges();
    expect(component.isMobile()).toBeTrue();
  });

  it('should change card to mobile size', () => {
    const mobile = {
      firstItem: {
        width: 450,
        height: 550
      },
      others: {
        width: 150,
        height: 150
      }
    }
    spyOn(component, 'getInnerWidth').and.returnValue(425);
    fixture.detectChanges();
    component.changeCardSizes();
    expect(component.sizes).toEqual(mobile);
  });

  it('should be tablet', () => {
    spyOn(component, 'getInnerWidth').and.returnValue(768);
    fixture.detectChanges();
    component.isTablet()
    expect(component.isTablet()).toBeTrue();
  });

  it('should change card to tablet size', () => {
    const tabletSize = {
      firstItem: {
        width: 300,
        height: 400
      },
      others: {
        width: 200,
        height: 200
      }
    }
    spyOn(component, 'getInnerWidth').and.returnValue(768);
    fixture.detectChanges();
    component.changeCardSizes();
    expect(component.sizes).toEqual(tabletSize);
  });

  it('should trigger onResize method when window is resized', () => {
    spyOn(component, 'onWindowResize');
    spyOn(component, 'getInnerWidth').and.returnValue(768);
    fixture.detectChanges();
    window.dispatchEvent(new Event('resize'));
    expect(component.onWindowResize).toHaveBeenCalled();
  });
});
