import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

content:String = "";

  constructor() { }

  ngOnInit(): void {
    this.content = getContent();
  }

}
function getContent(): String {
  return "Hello World, we are here";
}

