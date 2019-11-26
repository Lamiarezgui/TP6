import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './application/produit/produit.component';
import { ContactComponent } from './application/contact/contact.component';
import { AcceuilComponent } from './application/acceuil/acceuil.component';
import { Error404Component } from './application/error404/error404.component';
import { MenuComponent } from './application/menu/menu.component';
import { ProduitsComponent } from './application/produits/produits.component';
import { AddProduitComponent } from './application/add-produit/add-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ContactComponent,
    AcceuilComponent,
    Error404Component,
    MenuComponent,
    ProduitsComponent,
    AddProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
