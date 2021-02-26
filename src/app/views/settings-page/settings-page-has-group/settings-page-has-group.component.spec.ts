import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPageHasGroupComponent } from './settings-page-has-group.component';

describe('SettingsPageHasGroupComponent', () => {
  let component: SettingsPageHasGroupComponent;
  let fixture: ComponentFixture<SettingsPageHasGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPageHasGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPageHasGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
