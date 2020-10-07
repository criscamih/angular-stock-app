import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInventariosComponent } from './table-inventarios.component';

describe('TableInventariosComponent', () => {
  let component: TableInventariosComponent;
  let fixture: ComponentFixture<TableInventariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInventariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInventariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
