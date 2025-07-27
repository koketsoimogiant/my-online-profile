import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

  users : any;
  private message:any;
  text:String = "";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp = this.http.get("https://jsonplaceholder.typicode.com/users");
    resp.subscribe((data)=>this.users=data);
    
    let msg = this.http.get("http://localhost:8080/hello");
    msg.subscribe((data)=>this.message=data);

    this.text = this.message;
  }

}
