import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { SidebarComponent as UserSidebar} from './pages/user/sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { authInterceptorProviders } from './models/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProductoListaComponent } from './pages/admin/producto-lista/producto-lista.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { AddProductoComponent } from './pages/admin/add-producto/add-producto.component';
import { ViewProductosComponent } from './pages/admin/view-productos/view-productos.component';
import { ViewProductoInventariosComponent } from './pages/admin/view-producto-inventarios/view-producto-inventarios.component';
import { InstruccionesComponent } from './pages/user/instrucciones/instrucciones.component';
import { LoadProductoComponent } from './pages/user/load-producto/load-producto.component';
import { StartComponent } from './pages/user/start/start.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';
import { ActualizarProductoComponent } from './pages/admin/actualizar-producto/actualizar-producto.component';
import { ActualizarPreguntaComponent } from './pages/admin/actualizar-pregunta/actualizar-pregunta.component';
import { AddPreguntaComponent } from './pages/admin/add-pregunta/add-pregunta.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { environment } from 'src/environments/environment';
import { ComprarProductoComponent } from './pages/user/comprar-producto/comprar-producto.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CarritoComponent } from './pages/user/carrito/carrito.component';
import { SendEmailComponent } from './changepassword/send-email.component';
import { ChangePasswordComponent } from './changepassword/change-password.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp } from "firebase/app";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProductoListaComponent,
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
    WelcomeUserComponent,
    ActualizarProductoComponent,
    AddPreguntaComponent,
    ComprarProductoComponent,
    DialogComponent,
    NosotrosComponent,
    CarritoComponent,
    ChangePasswordComponent,
    ActualizarPreguntaComponent,
    SendEmailComponent
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
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatMenuModule,
    BrowserModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
function provideFirebaseApp(arg0: () => import("firebase/app").app.App): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

