import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import{ProductComponent} from '../product/product.component'
import { from } from 'rxjs';
import {DataTableModule} from "angular-6-datatable";
import { ReactiveFormsModule } from '@angular/forms';

const routes = [
    {
        path     : 'product',
        component: ProductComponent
    }
];

@NgModule({
    declarations: [
        ProductComponent
    ],
    imports     : [
        RouterModule.forChild(routes),DataTableModule,ReactiveFormsModule
        
    ]
})
export class ProdctModule
{
}
