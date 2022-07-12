import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRemiComponent } from './list-remi.component';

describe('ListRemiComponent', () => {
  let component: ListRemiComponent;
  let fixture: ComponentFixture<ListRemiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRemiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
