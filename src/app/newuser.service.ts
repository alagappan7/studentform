import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewuserService {
  
  public payload=[];
  constructor(private http:HttpClient) {
    
  }

  getdata() {
    return this.http.get("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students");
  }

    adddata(name:string,email:string,date:string,age:number,rollNo:number,isMale:boolean){
      
      const headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');
      this.http.post("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students", {name:name, email:email,age:age,date:date,rollNo:rollNo,isMale:isMale})
                .subscribe(() => {}, err => console.error(err)); 
      }

      updatedata(name:string,email:string,age:number,date:string,id:string,rollNo:number,isMale:boolean){
        
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.http.put(`http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/${id}`,{name:name, email:email,age:age,date:date,rollNo:rollNo,isMale:isMale }).subscribe(()=>{

        },err => console.error(err));
      }


      deletedatadb(id) {
        return this.http.delete(`http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/${id}`);
      }
    
     




      
}
