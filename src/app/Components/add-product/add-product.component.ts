import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  @Output() productAdded = new EventEmitter<any>();
ProductForms:FormGroup;
constructor(private formulaireProudit:FormBuilder){
  this.ProductForms=this.formulaireProudit.group({
    idProduit:'',
    Code:'',
    Libelle:'',
    PrixUnitaire:'',
    TauxTva:''

  })

}
onFormSubmit() {
  if (this.ProductForms.valid) {
    const newProduct = this.ProductForms.value;
    this.productAdded.emit(newProduct);  
    this.ProductForms.reset();  
  }
}
}
