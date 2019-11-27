import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatToolbarModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule, 
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule, } from '@angular/material';
  import { FormsModule } from '@angular/forms';
  import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoriaComponent } from './historia';
import { RegisterComponent } from './register';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientService } from './shared/api/client.service';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
        // LoginComponent,
        HistoriaComponent,
        RegisterComponent,
        ClientListComponent,
        ClientEditComponent
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
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
