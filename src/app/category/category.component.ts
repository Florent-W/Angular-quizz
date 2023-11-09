import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../shared/services/category.service';
import { AuthService } from '../auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  categories: any;
  userName = '';
  rechercheForm: FormGroup;
  textRecherche: String = '';
  categoriesOriginal: any;

  constructor(private routeur : Router, private categoryService : CategoryService, private authService : AuthService, private formBuild : FormBuilder) {
      this.rechercheForm = this.formBuild.group({
        textRecherche: [''],
    });
  }

  ngOnInit(): void {

    this.userName = this.authService.user?.username || '';
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data
      this.categoriesOriginal = data
    });
  }

  
  submit() {
    if (this.textRecherche.trim() === '') {
      this.categoryService.getCategories().subscribe((data: any) => {
        this.categories = this.categoriesOriginal;
      });
    } else {
    this.categories = this.categories.filter((categorie: any) => {
      return categorie.name.includes(this.textRecherche);
    });
  }
}

  goToQuizz(idCategory:any) {
    this.routeur.navigate(['/quiz', this.userName, idCategory]);
  }

}
