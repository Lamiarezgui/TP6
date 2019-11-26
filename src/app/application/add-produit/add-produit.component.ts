import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitsService } from './produits.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  identifiant: number;
  libelle: string;
  submitted:boolean=false;
  message:string;

  
  onSubmit(f:NgForm) { 
    
    let verif:boolean=this.produitsservice.addProduit(this.identifiant,this.libelle);
    if (verif){
      this.message="Votre nouveau produit "+this.libelle+" a bien été ajouté"

    }
    else {this.message="Le produit  "+this.identifiant+" existe déjà"}
    this.submitted=true;
  }
  constructor(private router:Router,private produitsservice:ProduitsService) { }
 
  ngOnInit() {
  }
  
   
}
