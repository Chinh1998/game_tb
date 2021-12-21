import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { NgxLoadingModule } from 'ngx-loading';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './theme/layout/layout.component';
import { MenuComponent } from './theme/menu/menu.component';
import { LauncherComponent } from './views/launcher/launcher.component';
import { LoginComponent } from './views/login/login.component';
import { CountdownModule } from 'ngx-countdown';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    LoginComponent,
    LauncherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    ChartsModule,
    CountdownModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    // tslint:disable-next-line:ban-types
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
  }

}
