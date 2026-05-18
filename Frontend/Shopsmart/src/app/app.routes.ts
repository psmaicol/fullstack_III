import { Routes } from '@angular/router';

import { LoginComponents } from './pages/dashboard/login-components/login-components';

import { Register } from './pages/register/register';

import { InicioComponents } from './pages/inicio-components/inicio-components';

export const routes: Routes = [

  {
    path: '',
    component: LoginComponents
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'inicio',
    component: InicioComponents
  }

];