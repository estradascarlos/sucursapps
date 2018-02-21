import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { TddComponent } from './components/tdd/menuTDD/tdd.component';




const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'menutdd', component: TddComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
export const app_routing = RouterModule.forRoot(routes, {useHash: true});
