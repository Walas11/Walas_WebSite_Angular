import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loading: boolean = false;
  form: FormGroup;
  id: number;

  constructor(
      private fb: FormBuilder,
      private _Service: ServicesService,
      private _snackBar: MatSnackBar,
      private _aRout: ActivatedRoute
    ) {
      this.form = this.fb.group({
        Cedula: ['',Validators.required],
        Password: ['',Validators.required],
        NombreCompleto: ['',Validators.required],
        Celular: ['',Validators.required],
        Email: ['',Validators.required],
        Rol: ['',Validators.required],
      })
  
      this.id = Number(this._aRout.snapshot.paramMap.get('cedula'))
    }

  GetLogin(cedula: number, Password: string)
  {
    this.loading = true;
    this._Service.GetUserByLogin(cedula, Password).subscribe(data =>{
      this.form.setValue({
        Cedula: data.Cedula,
        Password: data.Password,
        Nombrecompleto: data.Nombrecompleto,
        Celular: data.Celular,
        Email: data.Email,
        Rol: data.Rol
      })
      this.loading = false
      this.mensajeExito(cedula);
    })
  }

  mensajeExito(cedula: number)
  {
    if (cedula != 0) {
      this._snackBar.open("Login Exitoso", " ", {
        duration: 4000,
        horizontalPosition: 'center'
      });
    }
    else{
      this._snackBar.open("Login Incorrecto", " ", {
        duration: 4000,
        horizontalPosition: 'center'
      });
    }
  }
}
