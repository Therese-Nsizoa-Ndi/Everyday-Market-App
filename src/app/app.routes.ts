
import { Routes } from '@angular/router';

import { RegistrerPage } from './market/registrer-page/registrer-page';
import { ProductsPage } from './market/products-page/products-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },

  {
    path: 'register',
    component: RegistrerPage
  },

  {
    path: 'products',
    component: ProductsPage
  }
];