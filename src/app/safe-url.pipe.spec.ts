import { SafeUrlPipe } from './safe-url.pipe';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { inject, TestBed } from '@angular/core/testing';

describe('SafeUrlPipe', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [BrowserModule]
      });
  });

  it('should create', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    let pipe = new SafeUrlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});