import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { OrganizationsModule } from "./organizations/organization.module";
import { HomeModule } from './home/home.module';
import { SupportersModule } from "./supporters/supporter.module";
import { AdministratorsModule } from "./administrators/administrator.module";

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    HomeModule,
    OrganizationsModule,
    SupportersModule,
    AdministratorsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {
}
