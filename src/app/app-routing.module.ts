import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'manager',
    loadChildren: () =>
      import('./pages/manager/manager.module').then((m) => m.ManagerPageModule),
  },
  {
    path: 'restock',
    loadChildren: () =>
      import('./pages/restock/restock.module').then((m) => m.RestockPageModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./pages/history/history.module').then((m) => m.HistoryPageModule),
  },
  {
    path: 'new-product',
    loadChildren: () =>
      import('./pages/new-product/new-product.module').then(
        (m) => m.NewProductPageModule
      ),
  },
  {
    path: 'history-details/:id',
    loadChildren: () =>
      import('./pages/history-details/history-details.module').then(
        (m) => m.HistoryDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
