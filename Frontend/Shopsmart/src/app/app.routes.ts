import { Routes } from '@angular/router';

import { LoginComponents } from './pages/dashboard/login-components/login-components';
import { Register } from './pages/register/register';
import { CatalogoComponentes } from './pages/dashboard/catalogo-componentes/catalogo-componentes';
import { InicioComponents } from './pages/inicio-components/inicio-components';
import { ResenaComponent } from './pages/dashboard/resenas-componentes/resenas-componentes';

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
  },
    {
    path: 'catalogo',
    component: CatalogoComponentes
  },
  { path: 'resena', 
    component: ResenaComponent
  }

];