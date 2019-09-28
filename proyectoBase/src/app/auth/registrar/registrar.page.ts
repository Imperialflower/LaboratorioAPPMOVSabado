import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

registrarForm:FormGroup;
  constructor(private formbuilder: FormBuilder) { 
    this.registrarForm=this.formbuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena:['',[Validators.required, Validators.minLength(6)]],
      confirmarcontrasena: ['', Validators.required]

  });
}
  
  ngOnInit() {}
  get f(){ return this.registrarForm.controls; }


registrar(){
  console.log(this.registrarForm.valid);
}

}