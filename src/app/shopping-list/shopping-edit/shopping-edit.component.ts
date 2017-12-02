import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const { name, amount } = form.value;
    const ingredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(ingredient);
  }
}
