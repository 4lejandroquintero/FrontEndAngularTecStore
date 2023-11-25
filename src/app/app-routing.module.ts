import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListaComponent } from './pages/admin/producto-lista/producto-lista.component';
import { ComprarProductoComponent } from './pages/comprar-producto/comprar-producto.component';
import { BuscarProductoComponent } from './pages/admin/buscar-producto/buscar-producto.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { AgregarProductoComponent } from './pages/admin/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './pages/admin/editar-producto/editar-producto.component';
import { AddProductoComponent } from './pages/admin/add-producto/add-producto.component';
import { ViewProductosComponent } from './pages/admin/view-productos/view-productos.component';
import { ViewProductoInventariosComponent } from './pages/admin/view-producto-inventarios/view-producto-inventarios.component';
import { StartComponent } from './pages/user/start/start.component';
import { InstruccionesComponent } from './pages/user/instrucciones/instrucciones.component';
import { LoadProductoComponent } from './pages/user/load-producto/load-producto.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {path: 'comprar-producto/:id', component: ComprarProductoComponent},
  {path: 'buscar-producto/:descripcion', component: BuscarProductoComponent},
  {path: 'admin',
  component:DashboardComponent,
  canActivate:[AdminGuard],
  children:[
    {
      path:'profile',
      component:ProfileComponent
    },
    {
      path : '',
      component : WelcomeComponent
    },
    {
      path:'categorias',
      component:ViewCategoriasComponent
    },
    {
      path:'add-categoria',
      component:AddCategoriaComponent
    },
    {
      path:'productos',
      component:ViewProductosComponent
    },
    {
      path:'add-producto',
      component:AddProductoComponent
    },
    {
      path:'editar-producto/:id',
      component: EditarProductoComponent
    },
    {
      path:'ver-productos/:productoId/:codigo',
      component:ViewProductoInventariosComponent
    },
    {
      path:'productos-lista',
      component:ProductoListaComponent
    }
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children : [
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'',
        component:WelcomeUserComponent
      },
      {
        path:'instrucciones/:productoId',
        component:InstruccionesComponent
      },
      {
        path:'welcome-user',
        component:WelcomeUserComponent
      }
    ]
  },
  {
    path:"start/:productoId",
    component:StartComponent,
    canActivate:[NormalGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
