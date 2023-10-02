import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './meuscomponentes/header/header.component';
import { FooterComponent } from './meuscomponentes/footer/footer.component';
import { LoginComponent } from './meuscomponentes/login/login.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent }, 
  { path: 'footer', component: FooterComponent }, 
  { path: 'login', component: LoginComponent }, // Rota para o LoginComponent
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
