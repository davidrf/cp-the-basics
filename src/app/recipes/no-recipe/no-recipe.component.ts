import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-no-recipe',
  templateUrl: './no-recipe.component.html',
  styleUrls: ['./no-recipe.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
