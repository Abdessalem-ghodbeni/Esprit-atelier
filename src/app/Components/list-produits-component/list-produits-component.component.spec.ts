import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduitsComponentComponent } from './list-produits-component.component';

describe('ListProduitsComponentComponent', () => {
  let component: ListProduitsComponentComponent;
  let fixture: ComponentFixture<ListProduitsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProduitsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProduitsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
