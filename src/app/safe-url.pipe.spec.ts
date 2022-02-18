import { SafeUrlPipe } from './safe-url.pipe';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { inject, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SafeUrlPipe', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [BrowserModule],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      });
  });

  it('should create', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    let pipe = new SafeUrlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});