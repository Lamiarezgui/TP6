import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProduitsComponent } from '../application/produits/produits.component';
import { ProduitsService } from '../application/add-produit/produits.service';

@Component({
  selector: 'app-plusproduit',
  templateUrl: './plusproduit.component.html',
  styleUrls: ['./plusproduit.component.css']
})
export class PlusproduitComponent implements OnInit {
 /* productForm: FormGroup = new FormGroup( { 
    id:new FormControl(''), 
  libelle:new FormControl('')} );*/
  id: number;
  libelle: string;
  message: string;
  constructor(private produitservice:ProduitsService) { }
  
  onSubmitForm() {

     let verif:boolean=this.produitservice.addProduit(this.productForm.value['id'],this.productForm.value['libelle']);

  }
  productForm: FormGroup = new FormGroup( {
    id:new FormControl('', Validators.required), 
  libelle:new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-zA-Z]+')])} );
  ngOnInit() {
  }
  public get idProduct() { 
    return this.productForm.get('id'); }
    public get libProd() { 
      return this.productForm.get('libelle'); }


}
