import { Injectable } from '@angular/core';
import { Produit } from '../Models/produit';

@Injectable({
  providedIn: 'root',
})
export class ProduitServicesService {
  private products: Produit[] = [
    // Supposons que products contient la liste de produits
    {
      idProduit: 1,
      code: '12345',
      libelle: 'Produit 1',
      prixUnitaire: 10.99,
      tauxTVA: 0.2,
    },
    {
      idProduit: 2,
      code: '23456',
      libelle: 'Produit 2',
      prixUnitaire: 15.99,
      tauxTVA: 0.2,
    },
    {
      idProduit: 1,
      code: 'P147852P',
      libelle: 'Produit1',
      prixUnitaire: 12.5,
      tauxTVA: 0.02,
    },
    {
      idProduit: 2,
      code: 'P147552P',
      libelle: 'Produit1',
      prixUnitaire: 30,
      tauxTVA: 0.198,
    },
    {
      idProduit: 3,
      code: 'D14785CC',
      libelle: 'Produit1',
      prixUnitaire: 20,
      tauxTVA: 0.198,
    },
    {
      idProduit: 4,
      code: 'E147852P',
      libelle: 'Produit1',
      prixUnitaire: 50,
      tauxTVA: 0.198,
    },
    {
      idProduit: 5,
      code: 'F147852P',
      libelle: 'Produit1',
      prixUnitaire: 70,
      tauxTVA: 0.02,
    },
  ];
  constructor() {}
  getAllProducts(): Produit[] {
    return this.products;
  }
  getNbProductsByLibelle(libelle: string): number {
    let count = 0;
    for (let product of this.products) {
      if (product.libelle === libelle) {
        count++;
      }
    }
    return count;
  }
}
