import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { SidebarComponent as UserSidebar} from './pages/user/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProductoListaComponent } from './pages/admin/producto-lista/producto-lista.component';
import { ComprarProductoComponent } from './pages/comprar-producto/comprar-producto.component';
import { BuscarProductoComponent } from './pages/admin/buscar-producto/buscar-producto.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AgregarProductoComponent } from './pages/admin/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './pages/admin/editar-producto/editar-producto.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { AddProductoComponent } from './pages/admin/add-producto/add-producto.component';
import { ViewProductosComponent } from './pages/admin/view-productos/view-productos.component';
import { ViewProductoInventariosComponent } from './pages/admin/view-producto-inventarios/view-producto-inventarios.component';
import { InstruccionesComponent } from './pages/user/instrucciones/instrucciones.component';
import { LoadProductoComponent } from './pages/user/load-producto/load-producto.component';
import { StartComponent } from './pages/user/start/start.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    AgregarProductoComponent,
    EditarProductoComponent,
    ProductoListaComponent,
    ComprarProductoComponent,
    BuscarProductoComponent,
    AddCategoriaComponent,
    ProfileComponent,
    WelcomeComponent,
    ViewCategoriasComponent,
    SidebarComponent,
    AddProductoComponent,
    ViewProductosComponent,
    ViewProductoInventariosComponent,
    InstruccionesComponent,
    LoadProductoComponent,
    StartComponent,
    UserSidebar,
    WelcomeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
