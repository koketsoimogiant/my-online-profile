import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArsernalComponent } from './arsernal.component';

describe('ArsernalComponent', () => {
  let component: ArsernalComponent;
  let fixture: ComponentFixture<ArsernalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArsernalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArsernalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
