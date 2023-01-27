import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfileComponent } from './cfile.component';

describe('CfileComponent', () => {
  let component: CfileComponent;
  let fixture: ComponentFixture<CfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
