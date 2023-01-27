import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvalidationComponent } from './cvalidation.component';

describe('CvalidationComponent', () => {
  let component: CvalidationComponent;
  let fixture: ComponentFixture<CvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvalidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
