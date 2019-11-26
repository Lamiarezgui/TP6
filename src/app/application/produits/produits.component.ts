import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../add-produit/produits.service';
import { Produit } from '../Produit';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
 lesProduits:Produit[];
  constructor(private produitservice:ProduitsService) { }

  ngOnInit() {
    this.lesProduits=this.produitservice.products;
  }

}
