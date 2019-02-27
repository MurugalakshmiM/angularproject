import { Component } from '@angular/core';
import { TasklistService } from './tasklist.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userlist ;
  userName;
  check = true;
  constructor(private listUSer: TasklistService){}
  onclickevent(){
    this.check = !(this.check)
    //console.log(this.check);
  }
  onAddTask(){
    this.listUSer.addList(this.userName);
    this.userlist = this.listUSer.listUbdate;
  }
  oncanceltask(task){
    this.listUSer.deleteelement(task);
  }
  onedittask(task){
    this.listUSer.editelement(task);
  }
  
}
