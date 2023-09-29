import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FournisseurComponentComponent } from './Components/fournisseur-component/fournisseur-component.component';
import { ListFournisseurComponentComponent } from './Components/list-fournisseur-component/list-fournisseur-component.component';
import { ListProduitsComponentComponent } from './Components/list-produits-component/list-produits-component.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomePageComponent } from './Components/home-page/home-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddProductComponent } from './Components/add-product/add-product.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponentComponent,
    ListFournisseurComponentComponent,
    ListProduitsComponentComponent,
    HeaderComponent,
    HomePageComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, BrowserAnimationsModule,MatIconModule,MatButtonModule,MatToolbarModule,MatDialogModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
