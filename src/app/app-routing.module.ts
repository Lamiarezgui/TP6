import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './application/produit/produit.component';
import { ContactComponent } from './application/contact/contact.component';
import { AcceuilComponent } from './application/acceuil/acceuil.component';
import { Error404Component } from './application/error404/error404.component';
import { ProduitsComponent } from './application/produits/produits.component';
import { AddProduitComponent } from './application/add-produit/add-produit.component';
const routes: Routes = [
  {path:'acceuil', component:AcceuilComponent}, 
  {path:'produits', component:ProduitsComponent}, 
  {path:'contact', component:ContactComponent}, 
  {path:'add-produit', component:AddProduitComponent}, 
  {path:'produits/:id', component:ProduitComponent},
  {path:'', redirectTo:'acceuil', pathMatch:'full'},
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
