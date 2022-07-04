import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimisationsComponent } from './optimisations.component';

describe('OptimisationsComponent', () => {
  let component: OptimisationsComponent;
  let fixture: ComponentFixture<OptimisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimisationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
