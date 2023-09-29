import { Component } from '@angular/core';
import { Fournisseur } from 'src/app/Models/fournisseur';
@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent {
FisrtFournissuer=new Fournisseur();
 
 
hide=false;
 
  constructor(){
    this.FisrtFournissuer.idFournisseur=105;
    this.FisrtFournissuer.code= 'A104B89';
    this.FisrtFournissuer.libelle='MyTeck';
    
  }
  ChangeStatus(){
    this.hide=!this.hide;
    console.log("la valeur de hide est ",this.hide)
  }
}
