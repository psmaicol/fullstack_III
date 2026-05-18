import { Routes } from '@angular/router';

import { LoginComponents } from './pages/dashboard/login-components/login-components';
import { Register } from './pages/register/register';
import { CatalogoComponentes } from './pages/dashboard/catalogo-componentes/catalogo-componentes';

import { InicioComponents } from './pages/inicio-components/inicio-components';

export const routes: Routes = [


  {
    path: '',
    component: LoginComponents
  },

  {
<<<<<<< HEAD
    path: 'register',
    component: Register
  },

  {
    path: 'inicio',
    component: InicioComponents
  }
=======
  path: 'register',
  component: Register
  },
    {
    path: 'catalogo',
    component: CatalogoComponentes
  },

>>>>>>> 963bd65e9a440c6e10849ac1456f9ac11105bce7

];