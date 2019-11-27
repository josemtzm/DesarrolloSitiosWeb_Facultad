import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { RegisterComponent } from './register';
import { HistoriaComponent } from './historia';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientListComponent } from './client-list/client-list.component';

import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
    // { path: 'login', component: LoginComponent },
    { path: 'historia', component: HistoriaComponent},
    // { path: 'register', component: RegisterComponent },
    { path: 'register', component: ClientEditComponent },
    { path: 'clients', component: ClientListComponent },


    { path: 'products', component: ProductComponent },
	  { path: 'cart', component: CartComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
