import { Component } from '@angular/core';
import { Fournisseur } from 'src/app/Models/fournisseur';

@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styleUrls: ['./list-fournisseur-component.component.css']
})
export class ListFournisseurComponentComponent {
  // public Fournisseur : Array<Fournisseur> = [];
 Fournisseur : Fournisseur[]=[];
 constructor(){
  this.Fournisseur=[
    {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
 {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
 {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
 {idFournisseur:400,code:"40ABC452",libelle:"hp"},
 {idFournisseur:101,code:"1ABC4522",libelle:"mercedess"},
 {idFournisseur:200,code:"2ABC4dfezf522",libelle:"audi"},
 {idFournisseur:53,code:"3ABdfCZADZSD4522",libelle:"fiat"},
 {idFournisseur:555,code:"40ABADZSDC452",libelle:"golf"}

  ]
 }
 isLibelleHp(fournisseur : Fournisseur): boolean{
  return fournisseur.libelle=="hp";
 }
 getWeight(code: string): boolean {
  return code.startsWith('2A');
}
RemoveFournisseur(id:number):void{
  this.Fournisseur=this.Fournisseur.filter((fournisseur)=>fournisseur.idFournisseur!=id);
}
}
