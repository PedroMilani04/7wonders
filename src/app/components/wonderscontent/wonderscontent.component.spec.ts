import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderscontentComponent } from './wonderscontent.component';

describe('WonderscontentComponent', () => {
  let component: WonderscontentComponent;
  let fixture: ComponentFixture<WonderscontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WonderscontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WonderscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
