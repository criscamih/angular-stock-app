import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProveedoresComponent } from './table-proveedores.component';

describe('TableProveedoresComponent', () => {
  let component: TableProveedoresComponent;
  let fixture: ComponentFixture<TableProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
