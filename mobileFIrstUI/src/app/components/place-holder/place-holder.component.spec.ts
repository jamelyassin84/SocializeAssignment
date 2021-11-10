import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacHolderComponent } from './place-holder.component';

describe('PlacHolderComponent', () => {
  let component: PlacHolderComponent;
  let fixture: ComponentFixture<PlacHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlacHolderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
