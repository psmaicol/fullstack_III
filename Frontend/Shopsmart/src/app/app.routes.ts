import { Routes } from '@angular/router';
import { LoginComponents } from './pages/dashboard/login-components/login-components';
import { Register } from './pages/register/register';
import { CatalogoComponentes } from './pages/dashboard/catalogo-componentes/catalogo-componentes';

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
    path: 'catalogo',
    component: CatalogoComponentes
  },


];