import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipePage } from './recipe.page';

const routes: Routes = [
  {
    path: '',
    component: RecipePage
  },
  {
    path: 'recipe-details',
    loadChildren: () => import('./recipe-details/recipe-details.module').then( m => m.RecipeDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipePageRoutingModule {}
