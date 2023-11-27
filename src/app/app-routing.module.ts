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
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { AddProductoComponent } from './pages/admin/add-producto/add-producto.component';
import { ViewProductosComponent } from './pages/admin/view-productos/view-productos.component';
import { ViewProductoInventariosComponent } from './pages/admin/view-producto-inventarios/view-producto-inventarios.component';
import { StartComponent } from './pages/user/start/start.component';
import { InstruccionesComponent } from './pages/user/instrucciones/instrucciones.component';
import { LoadProductoComponent } from './pages/user/load-producto/load-producto.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';
import { TokenComponent } from './pages/token/token.component';
import { ActualizarProductoComponent } from './pages/admin/actualizar-producto/actualizar-producto.component';
import { AddPreguntaComponent } from './pages/admin/add-pregunta/add-pregunta.component';
import { ActualizarPreguntaComponent } from './pages/admin/actualizar-pregunta/actualizar-pregunta.component';
import { ComprarProductoComponent } from './pages/user/comprar-producto/comprar-producto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CarritoComponent } from './pages/user/carrito/carrito.component';
import { SendEmailComponent } from './changepassword/send-email.component';
import { ChangePasswordComponent } from './changepassword/change-password.component';

const routes: Routes = [
  {path : '', component : HomeComponent, pathMatch : 'full'},
  {path : 'signup', component : SignupComponent, pathMatch : 'full'},
  {path : 'login', component : LoginComponent, pathMatch : 'full'},
  {path : 'sendemail', component : SendEmailComponent, pathMatch : 'full'},
  {path : 'changepassword/:tokenPassword', component : ChangePasswordComponent, pathMatch : 'full'},
  {path: 'token', component: TokenComponent},

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
      path:'producto/:productoId',
      component: ActualizarProductoComponent
    },
    {
      path:'ver-preguntas/:productoId/:codigo',
      component:ViewProductoInventariosComponent
    },
    {
      path:'add-pregunta/:productoId/:codigo',
      component:AddPreguntaComponent
    },
    {
      path:'pregunta/:preguntaId',
      component:ActualizarPreguntaComponent
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
        path:'carrito',
        component:CarritoComponent
      },
      {
        path:'nosotros',
        component:NosotrosComponent
      },
      {
        path:':catId',
        component:LoadProductoComponent
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
      },
      {
        path:'comprar',
        component:ComprarProductoComponent
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
