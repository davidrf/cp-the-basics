import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private router: Router,
    private recipeService: RecipeService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id !== undefined;
        this.initForm();
      }
    );
  }

  private initForm() {
    const recipe = this.editMode
      ? this.recipeService.getRecipe(this.id)
      : { name: '', imagePath: '', description: '', ingredients: [] };

    const ingredientFormGroups = recipe.ingredients.map(({ name, amount }) => {
      return new FormGroup({
        'name': new FormControl(name, Validators.required),
        'amount': new FormControl(amount, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    });

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipe.name, Validators.required),
      'imagePath': new FormControl(recipe.imagePath, Validators.required),
      'description': new FormControl(recipe.description, Validators.required),
      'ingredients': new FormArray(ingredientFormGroups),
    });
  }

  onSubmit() {
    // const { name, description, imagePath, ingredients } = this.recipeForm.value;
    // const newRecipe = new Recipe(name, description, imagePath, [])

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }

    this.onCancel();
  };

  onAddIngredient() {
    const ingredientFormGroup = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
    });

    (<FormArray>this.recipeForm.get('ingredients')).push(ingredientFormGroup)
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
