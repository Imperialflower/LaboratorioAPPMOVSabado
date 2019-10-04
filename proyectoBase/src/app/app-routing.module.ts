import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistrarPage } from './auth/registrar/registrar.page';
<<<<<<< HEAD

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'registro', component: RegistrarPage },
  { path: 'registrar', component: RegistrarPage  },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' }
=======

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'registrar', component: RegistrarPage },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' }

>>>>>>> ba67054aa114e8ad4e647379d009e1023e4be870
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule {}
=======
export class AppRoutingModule {}
>>>>>>> ba67054aa114e8ad4e647379d009e1023e4be870
