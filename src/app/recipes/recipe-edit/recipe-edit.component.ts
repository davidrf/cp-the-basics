import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id !== undefined;
        console.log(params.id)
        console.log(this.editMode)
        this.initForm();
      }
    );
  }

  private initForm() {
    const recipe = this.editMode
      ? this.recipeService.getRecipe(this.id)
      : { name: '', imagePath: '', description: '' };

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipe.name),
      'imagePath': new FormControl(recipe.imagePath),
      'description': new FormControl(recipe.description),
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  };
}
