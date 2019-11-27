import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { RegisterComponent } from './register';
import { HistoriaComponent } from './historia';
import { ClientEditComponent } from './client-edit/client-edit.component';


const routes: Routes = [
  // { path: '', component: HomeComponent },
    // { path: 'login', component: LoginComponent },
    { path: 'historia', component: HistoriaComponent},
    // { path: 'register', component: RegisterComponent },
    { path: 'register', component: ClientEditComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
