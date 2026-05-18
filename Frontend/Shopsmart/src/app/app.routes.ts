import { Routes } from '@angular/router';
import { LoginComponents } from './pages/dashboard/login-components/login-components';
import { InicioComponentes } from './pages/dashboard/inicio-componentes/inicio-componentes';
import { Register } from './pages/register/register';

export const routes: Routes = [

  {
    path: '',
    component: LoginComponents
  },

  {
  path: 'register',
  component: Register
}

];