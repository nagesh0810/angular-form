import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderformComponent } from './builderform.component';

describe('BuilderformComponent', () => {
  let component: BuilderformComponent;
  let fixture: ComponentFixture<BuilderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
