import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './module/layout/layout.module';
import { LoginComponent } from './core/component/login/login.component';
import { RegisterComponent} from './core/component/register/register.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [

  { path: 'app', loadChildren: () => LayoutModule },
  { path: 'login', component : LoginComponent},
  { path: 'register', component : RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'logout', component : LoginComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
