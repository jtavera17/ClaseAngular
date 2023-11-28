import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recuperation.component.html',
  styleUrl: './recuperation.component.css'
})
export class RecuperationComponent {
  nombreUsuarioRec: string = '';
  contrasenaRec: string = '';

  mensajeRecuperacion: string = '';

  constructor(
    public routeRec: Router
  ){}

  private obtenerListaUsuarios(): any[] {
    const listaUsuariosString = localStorage.getItem('listaUsuarios');
    return listaUsuariosString ? JSON.parse(listaUsuariosString) : [];
  }

  validarRec() {
    // Obtiene la lista actual de usuarios
    const listaUsuarios = this.obtenerListaUsuarios();

    // Busca el usuario en la lista
    const usuarioIndex = listaUsuarios.findIndex(usuario => usuario.nombre === this.nombreUsuarioRec);
  
    if (usuarioIndex !== -1) {
      // Actualiza la contraseña del usuario
      listaUsuarios[usuarioIndex].contrasena = this.contrasenaRec;
  
      // Guarda la lista actualizada en el localStorage
      localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
  
      this.mensajeRecuperacion = 'Cambio de contraseña exitoso';
      setTimeout(() => {
        this.routeRec.navigateByUrl('');
      }, 2000);
    } else {
      this.mensajeRecuperacion = 'El usuario no está registrado en el sistema, por favor regístrese';
  
      setTimeout(() => {
        this.routeRec.navigateByUrl('register');
      }, 2000);
    }
  
    // Limpiar los valores después de validar
    this.limpiarValores();
  }

  private limpiarValores() {
    this.nombreUsuarioRec = '';
    this.contrasenaRec = '';
  }



}
