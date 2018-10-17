import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './module/layout/layout.module';
import { LoginModule } from './module/login/login.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [

  { path: 'app', loadChildren: () => LayoutModule },
  { path: 'login', loadChildren: () => LoginModule },
  { path: 'register', loadChildren: () => LoginModule },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'logout', loadChildren: () => LoginModule },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
