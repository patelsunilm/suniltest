import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import{productService} from '../../services/product.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
 
  registerForm: FormGroup;
  submitted = false;
 

  userTypes: string[];
  modalTypes: string[];
  urls = new Array<string>();
  filesToUpload: Array<File> = [];
  image: any;
  constructor(private formBuilder: FormBuilder,private productService : productService ,private router: Router) { }

  ngOnInit() {

    this.registerForm=new FormGroup({
     
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      addresh:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),

     
     

    })
    
  }
 
  readUrl(fileInput : any, index) {

   

    var imagefiles = fileInput.target.files;

        if (fileInput.target.files && fileInput.target.files[0]) {
            var regex = new RegExp("(.*?)\.(jpg|jpeg|png|raw|tiff)$");

            if (!(regex.test(fileInput.target.value.toLowerCase()))) {
                fileInput.target.value = ''
              

            } else {

                var testreader = new FileReader();
                testreader.onload = (fileInput: any) => {
                    this.urls[index] = fileInput.target.result;
                    this.filesToUpload.push(imagefiles[0]);
                   
                }
                testreader.readAsDataURL(fileInput.target.files[0]);
            }
        }
  }

  onSubmit() {
   
    console.log('test');
    console.log( this.registerForm.value)
    console.log(this.filesToUpload[0]);
//    this.filesToUpload[0].

    this.productService.addpackage(this.registerForm.value ,this.filesToUpload[0])

    .subscribe(
        data => {
           

          this.router.navigate(['/login'])

        },
        error => {
           
        });





  }

}
