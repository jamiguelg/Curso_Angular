import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCompraComponent } from './item-compra.component';

describe('ItemCompraComponent', () => {
  let component: ItemCompraComponent;
  let fixture: ComponentFixture<ItemCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
