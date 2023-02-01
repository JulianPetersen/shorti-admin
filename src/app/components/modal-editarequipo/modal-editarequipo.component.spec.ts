import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarequipoComponent } from './modal-editarequipo.component';

describe('ModalEditarequipoComponent', () => {
  let component: ModalEditarequipoComponent;
  let fixture: ComponentFixture<ModalEditarequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarequipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
