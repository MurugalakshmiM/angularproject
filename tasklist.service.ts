import { Injectable } from '@angular/core';
import { List } from './list'
import { StringMap } from '@angular/core/src/render3/jit/compiler_facade_interface';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  listUbdate = [];
  constructor() { }
  addList(name : String){
  this.listUbdate.push(name);
  }
  deleteelement(task){
   let index = this.listUbdate.indexOf(task);
   this.listUbdate.splice(index,1);
  }
  editelement(task){
    let index = this.listUbdate.indexOf(task);
    this.listUbdate[index]=prompt("enter task");
  }
}
