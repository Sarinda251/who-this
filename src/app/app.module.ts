import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment'
import { AuthService } from "./shared/services/auth.service";

import { FileUploadModule } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './login/registration/registration.component';
import { VerificationComponent } from './login/verification/verification.component';
import { HomeComponent } from './home/home.component';
import { CreateContactDialogComponent } from './home/create-contact-dialog/create-contact-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    VerificationComponent,
    HomeComponent,
    CreateContactDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateContactDialogComponent]
})
export class AppModule { }
