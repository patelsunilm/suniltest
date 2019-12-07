import { Component, OnInit } from '@angular/core';
import{productService} from '../../services/product.service'

import { from } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   test : any
   prodata : any;
  constructor(private productService : productService) { }
  newEmployeeClicked = false;

  ngOnInit() {



    this.productService.getAllallupdates()
    .subscribe(
      data => {

       console.log('data')
       console.log(data);
       this.prodata = data;
      },
      error => {
        console.log(error);
      });

  }

  deletecompany(id) {


    console.log('delete')
    console.log(id);
    this.productService.deletecompany(id)
    .subscribe(
      data => {
        this.productService.getAllallupdates()
        .subscribe(
          data => {
    
           console.log('data')
           console.log(data);
           this.prodata = data;
          },
          error => {
            console.log(error);
          });
      },
      error => {
        console.log(error);
        // this.alertService.error(error);
      });
  }



}
