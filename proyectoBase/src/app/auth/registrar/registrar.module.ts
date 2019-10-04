import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> ba67054aa114e8ad4e647379d009e1023e4be870
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrarPage } from './registrar.page';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
=======


>>>>>>> ba67054aa114e8ad4e647379d009e1023e4be870
const routes: Routes = [
  {
    path: '',
    component: RegistrarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
<<<<<<< HEAD
=======

>>>>>>> ba67054aa114e8ad4e647379d009e1023e4be870
  ],
  declarations: []
})
export class RegistrarPageModule {}
