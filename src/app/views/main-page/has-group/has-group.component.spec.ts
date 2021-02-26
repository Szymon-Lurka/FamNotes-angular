import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasGroupComponent } from './has-group.component';

describe('HasGroupComponent', () => {
  let component: HasGroupComponent;
  let fixture: ComponentFixture<HasGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HasGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
