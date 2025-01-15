import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './controller/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full'},
    { path: 'Login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes { }