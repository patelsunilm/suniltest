import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import{productService} from '../../services/product.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdteproductComponent implements OnInit {
 
 
  registerForm: FormGroup;
  submitted = false;
 

  userTypes: string[];
  modalTypes: string[];
  urls = new Array<string>();
  filesToUpload: Array<File> = [];
  image: any;
  constructor(private _formBuilder: FormBuilder,private route: ActivatedRoute,private formBuilder: FormBuilder,private productService : productService ,private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log('params')
      console.log(params.id)
      this.productService.getproductbyid(params.id)

      .subscribe(
          data => {
             
            console.log('data pro')
            console.log(data);

            this.registerForm = this._formBuilder.group({
              name: [data.name],
              city:[data.city],
              addresh:[data.addresh],
              email:[data.email]
            });
  
          },
          error => {
             
          });



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
   
    

    this.productService.updatepackage(this.registerForm.value ,this.filesToUpload[0])

    .subscribe(
        data => {
           

          this.router.navigate(['/login'])

        },
        error => {
           
        });





  }

}
