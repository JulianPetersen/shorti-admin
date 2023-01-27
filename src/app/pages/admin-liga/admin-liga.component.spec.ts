import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLigaComponent } from './admin-liga.component';

describe('AdminLigaComponent', () => {
  let component: AdminLigaComponent;
  let fixture: ComponentFixture<AdminLigaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLigaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
