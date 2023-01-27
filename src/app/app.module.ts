import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';  
import { UserformComponent } from './userform/userform.component';
import { LoginComponent } from './login/login.component';
import { FileComponent } from './file/file.component';
import { CfileComponent } from './cfile/cfile.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BuilderformComponent } from './reactive-form/builderform/builderform.component';
import { CvalidationComponent } from './reactive-form/cvalidation/cvalidation.component';


@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    LoginComponent,
    FileComponent,
    CfileComponent,
    ReactiveFormComponent,
    BuilderformComponent,
    CvalidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
