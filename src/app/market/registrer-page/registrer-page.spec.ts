import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerPage } from './registrer-page';

describe('RegistrerPage', () => {
  let component: RegistrerPage;
  let fixture: ComponentFixture<RegistrerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrerPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrerPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
