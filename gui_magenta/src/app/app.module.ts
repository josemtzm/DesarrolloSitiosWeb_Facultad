import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatToolbarModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule, 
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatTableModule, } from '@angular/material';
  import { FormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoriaComponent } from './historia';
import { RegisterComponent } from './register';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientService } from './shared/api/client.service';

import { CartComponent  } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
        // LoginComponent,
        HistoriaComponent,
        RegisterComponent,
        ClientListComponent,
        ClientEditComponent,

        CartComponent,
        ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule, 
    FormsModule, 
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatTableModule,
    FlexLayoutModule
  ],
  exports: [
    MatNativeDateModule,
    FormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatToolbarModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,],
  providers: [
    ClientService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
