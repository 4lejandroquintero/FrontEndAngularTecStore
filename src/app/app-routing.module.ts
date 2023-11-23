import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListaComponent } from './pages/producto-lista/producto-lista.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';
import { ComprarProductoComponent } from './pages/comprar-producto/comprar-producto.component';
import { BuscarProductoComponent } from './pages/buscar-producto/buscar-producto.component';

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
  {
    path:'admin',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AdminGuard]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard]
  },
  {path:'productos', component: ProductoListaComponent},
  {path: '', redirectTo: 'productos', pathMatch:'full'},
  {path: 'agregar-producto', component: AgregarProductoComponent},
  {path: 'editar-producto/:id', component: EditarProductoComponent},
  {path: 'comprar-producto/:id', component: ComprarProductoComponent},
  {path: 'buscar-producto', component: BuscarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
