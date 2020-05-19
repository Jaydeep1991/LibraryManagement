import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandinpageComponent } from './landinpage/landinpage.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { MaterialModule } from './material/material.module';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowBookComponent } from './show-book/show-book.component';

@NgModule({
  declarations: [
    AppComponent,
    LandinpageComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    AddbooksComponent,
    DashboardComponent,
    ShowBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
