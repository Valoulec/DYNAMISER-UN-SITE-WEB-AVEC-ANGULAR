import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  produits: any[] = [
    { nom: 'Produit 1', prix: 50 },
    { nom: 'Produit 2', prix: 30 },
    { nom: 'Produit 3', prix: 70 },
    // Ajoutez plus de produits selon vos besoins
  ];

  searchResults: any[] = [];

  ngOnInit() {
    // Initialisation des produits
  }

  sortAscending() {
    this.produits.sort((a, b) => a.prix - b.prix);
  }

  sortDescending() {
    this.produits.sort((a, b) => b.prix - a.prix);
  }

  searchByName(event: any) {
    const value = event.target.value;
    // Maintenant, vous pouvez utiliser la variable 'value' pour effectuer la recherche
    this.searchResults = this.produits.filter((item) =>
      item.nom.toLowerCase().includes(value.toLowerCase())
    );
  }
}
