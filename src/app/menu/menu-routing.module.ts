import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  

  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import ('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'about',
        loadChildren: () => import ('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import ('../contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: '',
        redirectTo: 'menu/home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'tab3',
    loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
