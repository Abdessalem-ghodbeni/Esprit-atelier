import { Component } from '@angular/core';
import { Produit } from 'src/app/Models/produit';
import { AddProductComponent } from '../add-product/add-product.component';
import { MatDialog } from '@angular/material/dialog';
import { ProduitServicesService } from 'src/app/Services/produit-services.service';

@Component({
  selector: 'app-list-produits-component',
  templateUrl: './list-produits-component.component.html',
  styleUrls: ['./list-produits-component.component.css'],
})
export class ListProduitsComponentComponent {
  listProduits: Produit[] = [];
  produitsModifies: Map<number, boolean> = new Map<number, boolean>();
  serachTerm: string = '';
  couleur = 'blue';
  listProduitsOriginal: Produit[] = []; // Copie de la liste d'origine

  constructor(
    private _dialog: MatDialog,
    private productService: ProduitServicesService
  ) {
    //   this.listProduits = [
    //     {
    //       idProduit: 1,
    //       code: 'P147852P',
    //       libelle: 'Produit1',
    //       prixUnitaire: 12.5,
    //       tauxTVA: 0.02,
    //     },
    //     {
    //       idProduit: 2,
    //       code: 'P147552P',
    //       libelle: 'Produit1',
    //       prixUnitaire: 30,
    //       tauxTVA: 0.198,
    //     },
    //     {
    //       idProduit: 3,
    //       code: 'D14785CC',
    //       libelle: 'Produit1',
    //       prixUnitaire: 20,
    //       tauxTVA: 0.198,
    //     },
    //     {
    //       idProduit: 4,
    //       code: 'E147852P',
    //       libelle: 'Produit1',
    //       prixUnitaire: 50,
    //       tauxTVA: 0.198,
    //     },
    //     {
    //       idProduit: 5,
    //       code: 'F147852P',
    //       libelle: 'Produit1',
    //       prixUnitaire: 70,
    //       tauxTVA: 0.02,
    //     },
    //   ];
    //   this.listProduitsOriginal = [...this.listProduits];
    //
  }

  ngOnInit() {
    this.listProduits = this.productService.getAllProducts();
  }

  modifierTVA(id: number): void {
    const produit = this.listProduits.find((p) => p.idProduit === id);
    if (produit) {
      produit.tauxTVA = 0.2;
      this.produitsModifies.set(id, true);
    }
  }
  isNotEqualTo50(produit: Produit): boolean {
    return produit.prixUnitaire < 50;
  }
  SearchProduct(serachTerm: string): void {
    if (!serachTerm) {
      this.listProduits = this.listProduitsOriginal;
    } else {
      this.listProduits = this.listProduitsOriginal.filter((produit) =>
        produit.code.toLowerCase().includes(serachTerm.toLowerCase())
      );
    }
  }
  OpenAddProduct() {
    this._dialog.open(AddProductComponent);
  }
  onProductAdded(newProduct: any) {
    this.listProduits.push(newProduct);
  }

  calculateNbProducts(libelle: string) {
    this.listProduits.forEach((product) => {
      if (product.libelle === libelle) {
        product.count = this.productService.getNbProductsByLibelle(libelle);
      }
    });
  }
}
