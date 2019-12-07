import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map'
import { throwError, Observable } from 'rxjs';


@Injectable()
export class productService {
  constructor(private http: HttpClient) { }



  addpackage(packagedata,filess):Observable<any> {
     console.log('file uplodd and test');

    const formData: any = new FormData();
    const files: Array<File> = filess;

    

    formData.append("uploads", files);
    formData.append("email", packagedata.email);
    formData.append("name", packagedata.name);
    formData.append("addresh", packagedata.addresh);
    formData.append("city", packagedata.city);

   return this.http.post<any>("http://localhost:3000" + '/product', formData);
  }
  
  getAllallupdates() {
    return this.http.get<any>("http://localhost:3000" + '/product/getpackage');

  }

  deletecompany(id) {
    return this.http.delete<any>("http://localhost:3000" + '/product/deleteproduct/' + id)
  }

  getproductbyid(id) {
    return this.http.get<any>("http://localhost:3000" + '/product/getproductbyid/' + id)

  }

  updatepackage(filess,packagedata) {
   

    const formData1: any = new FormData();
    const files: Array<File> = filess;
    formData1.append("uploads", files);
    formData1.append("email", packagedata.email);
    formData1.append("name", packagedata.name);
    formData1.append("addresh", packagedata.addresh);
    formData1.append("city", packagedata.city);

   return this.http.post<any>("http://localhost:3000" + '/updatepackage', formData1);
  }
}