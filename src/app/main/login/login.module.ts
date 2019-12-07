import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import{LoginComponent} from '../login/login.component'
import { from } from 'rxjs';
import {DataTableModule} from "angular-6-datatable";
import { BrowserModule } from '@angular/platform-browser'
const routes = [
    {
        path     : 'login',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports     : [
        RouterModule.forChild(routes),DataTableModule
        ,BrowserModule
    ]
})
export class LoginModule
{
}
