import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import{UpdteproductComponent} from '../updateproduct/updateproduct.component'

import {DataTableModule} from "angular-6-datatable";
import { ReactiveFormsModule } from '@angular/forms';

const routes = [
    {
        path     : 'updateproduct/:id',
        component: UpdteproductComponent
    }
];

@NgModule({
    declarations: [
        UpdteproductComponent
    ],
    imports     : [
        RouterModule.forChild(routes),DataTableModule,ReactiveFormsModule
        
    ]
})
export class updateproductModule
{
}
