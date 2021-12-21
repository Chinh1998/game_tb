import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/auth';
import { LayoutComponent } from './theme/layout/layout.component';
import { LauncherComponent } from './views/launcher/launcher.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'football',
    pathMatch:'full'
  },
  {
    path: 'football',
    component: LauncherComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'goal',
    component: LayoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
