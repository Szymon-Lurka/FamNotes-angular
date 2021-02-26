import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPageHasNoGroupComponent } from './settings-page-has-no-group.component';

describe('SettingsPageHasNoGroupComponent', () => {
  let component: SettingsPageHasNoGroupComponent;
  let fixture: ComponentFixture<SettingsPageHasNoGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPageHasNoGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPageHasNoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
