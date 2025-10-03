import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktotopbtnComponent } from './backtotopbtn.component';

describe('BacktotopbtnComponent', () => {
  let component: BacktotopbtnComponent;
  let fixture: ComponentFixture<BacktotopbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BacktotopbtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacktotopbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
