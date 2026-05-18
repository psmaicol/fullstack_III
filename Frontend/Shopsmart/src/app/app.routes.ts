import { Routes } from '@angular/router';

import { LoginComponents } from './pages/dashboard/login-components/login-components';
import { Register } from './pages/register/register';
import { InicioComponents } from './pages/inicio-components/inicio-components';
import { ResenaComponent } from './pages/dashboard/resenas-componentes/resenas-componentes';
import { InventarioComponentesComponent } from './pages/dashboard/inventario-componentes/inventario-componentes';
import { Cupones } from './pages/cupones/cupones';
import { CatalogoComponentesComponent } from './pages/dashboard/catalogo-componentes/catalogo-componentes';

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
    component: CatalogoComponentesComponent
  },
  { path: 'resena', 
    component: ResenaComponent
  },
  {
    path: 'inventario',
    component: InventarioComponentesComponent
  },
  {
    path: 'cupones',
    component: Cupones
  }

];