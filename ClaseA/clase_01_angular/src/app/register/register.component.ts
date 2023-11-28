import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nombreUsuarioRegistro: string = '';
  primerApellidoRegistro: string = '';
  segundoApellidoRegistro: string = '';
  correoRegistro: string = '';
  celularRegistro: string = '';
  direccionRegistro: string = '';
  contrasenaUsuarioRegistro: string = '';

  mensajeRegistro: string = '';

  constructor(
    public routeR: Router
  ){}

  

    // Función para obtener la lista de usuarios del localStorage
    private obtenerListaUsuarios(): any[] {
      const listaUsuariosString = localStorage.getItem('listaUsuarios');
      return listaUsuariosString ? JSON.parse(listaUsuariosString) : [];
    }
  
    enviarDatosRegistro() {
      // Verifica si todos los campos están llenos
      if (
        this.nombreUsuarioRegistro &&
        this.primerApellidoRegistro &&
        this.segundoApellidoRegistro &&
        this.correoRegistro &&
        this.celularRegistro &&
        this.direccionRegistro &&
        this.contrasenaUsuarioRegistro
      ) {
        // Crea un nuevo usuario
        const nuevoUsuario = {
          nombre: this.nombreUsuarioRegistro,
          primerApellido: this.primerApellidoRegistro,
          segundoApellido: this.segundoApellidoRegistro,
          correo: this.correoRegistro,
          celular: this.celularRegistro,
          direccion: this.direccionRegistro,
          contrasena: this.contrasenaUsuarioRegistro
        };

        
    
        console.log('Nuevo Usuario:', nuevoUsuario);
    
        // Obtiene la lista actual de usuarios
        const listaUsuarios = this.obtenerListaUsuarios();
    
        // Agrega el nuevo usuario a la lista
        listaUsuarios.push(nuevoUsuario);
    
        // Guarda la lista actualizada en el localStorage
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
    
        // Muestra un mensaje de registro exitoso
        this.mensajeRegistro = 'Registro exitoso';
        setTimeout(() => {
          this.routeR.navigateByUrl('');;
        }, 2000);
      } else {
        // Muestra un mensaje de error y no realiza la acción de registro
        this.mensajeRegistro = 'Error: Todos los campos deben estar llenos para registrar';
      }
    }

}
