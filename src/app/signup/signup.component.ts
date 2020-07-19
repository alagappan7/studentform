import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms' 
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
import {NewuserService} from '../newuser.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  iscollapsed : boolean = true;
  num:number;
  val:number;
  name1 :string;
  email1 :string;
  phone1: number;
  password1:string;
  date:string; 
  age:number;
  email:string;
  id:string;
  isMale:boolean;
  rollNo:number;
  gender:string;

  header=['age','date','email','name','id','isMale','rollNo']
  numberdata=[];
  number:string;
  editname:string;
  editemail:string;
  editdate:string;
  editage:number;
  editisMale:boolean;
  editrollNo:number;
  editdata=[]
  Name=[];
  Mail=[];
  Password=[];
  Phone=[];
  Gender=[];
  
  NAME:string;
  MAIL:string;
  PHONE:string;
  PASSWORD:string;
  


  payload=[]
  payload1=[]
  
  editid:string;
  constructor(private route: ActivatedRoute,private router: Router,private userservice:NewuserService) { } 
  
  ngOnInit(): void {
    
      this.userservice.getdata().subscribe((data:any) => {
        this.payload1 = data;
        console.log('Data requested ... ');
        
        console.log(this.payload1);
      });
 
  }

  onSubmit(name,email){
    
    this.Name.push(name);
    this.Mail.push(email);
    
  }

 deleteItem(i){
   console.log(i);
   
    this.Name.splice(i,1);
    this.Mail.splice(i,1);
 }
  toggle(i){
    this.num=i;
    this.iscollapsed=!this.iscollapsed;
    this.name1=this.Name[i];
    this.email1=this.Mail[i];
    

  }

  onedit(name,email,password,phone,gender){
    
    console.log("edit");
  
  }

  reflect(){
    console.log(this.NAME);
    this.iscollapsed=!this.iscollapsed;
    this.Name[this.num]=this.NAME;
    this.Mail[this.num]=this.MAIL;
    
  }
  fetchdata() {
    this.userservice.getdata().subscribe((data:any) => {
      this.payload1 = data;
      
      console.log(this.payload1);
    });
  }
  datatodb(name,email,date,age,id,rollNo,isMale){
    this.payload.push(name,email);
    console.log(isMale);
    this.userservice.adddata(name,email,date,age,id,rollNo,isMale);
    this.fetchdata();
  }

  

  retrievebyid(j){
     this.val=j;
     this.iscollapsed=!this.iscollapsed;
     this.editdata=this.payload1[this.val];
     console.log(this.editdata["name"]);
     this.editname=this.editdata['name'];
     this.editemail=this.editdata['email'];
     this.editid=this.editdata['id'];
     this.editage=this.editdata['age'];
     this.editdate=this.editdata['date'];
     this.editrollNo=this.editdata['rollNo'];
     this.editisMale=this.editdata['isMale'];


  }

  editdatadb() {
    
    this.userservice.updatedata(this.editname,this.editemail,this.editage,this.editdate,this.editid,this.editrollNo,this.editisMale);
    this.fetchdata();
    
  }

  deletedata(j) {
    this.val=j;
    this.iscollapsed=!this.iscollapsed;
    this.iscollapsed=!this.iscollapsed;
    this.editdata=this.payload1[this.val];
    this.number=this.editdata['id'];
    this.userservice.deletedatadb(this.number).subscribe(()=>{
      console.log("delete of data is happening..");
      this.fetchdata();
    });
    }
  

  setradiomale(){
    this.isMale=true;
    console.log('true value')
  }
}  


  
  



  

``