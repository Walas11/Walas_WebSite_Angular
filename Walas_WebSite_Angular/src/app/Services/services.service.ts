import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from '../Interface/UserDto';

@Injectable({
  providedIn: 'root',
  //imports: [HttpClient], // Aquí puedes agregar los módulos que necesite
})
export class ServicesService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'UserApi/';

  constructor(private http: HttpClient) 
  {

  }

  /**
   * Método para obtener un usuario por login.
   * @param cedula Número de cédula del usuario.
   * @param password Contraseña del usuario.
   * @returns Observable<UserDto>
   */
  GetUserByLogin(cedula: Number, password : string): Observable<UserDto>
  {
    const payload = { cedula, password }; // Cuerpo de la solicitud
    return this.http.get<UserDto>(`${this.myAppUrl}${this.myApiUrl}?cedula=${cedula}&password=${password}`)
  }
}
