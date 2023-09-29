import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFournisseurComponentComponent } from './list-fournisseur-component.component';

describe('ListFournisseurComponentComponent', () => {
  let component: ListFournisseurComponentComponent;
  let fixture: ComponentFixture<ListFournisseurComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFournisseurComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFournisseurComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
