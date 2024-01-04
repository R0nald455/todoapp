import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {Task} from '../../models/task.model'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tasks=signal<Task[]>([
    {
      id:Date.now(),
      title:'crear proyecto',
      completed:false

    },{
      id:Date.now(),
      title:'crear componente',
      completed:false

    }])

  changeHandler(event:Event){
    const input= event.target as HTMLInputElement;
    const newtask= input.value;
    this.addTask(newtask)
  }

  updateTask(index:number){
    this.tasks.update((tasks)=>{
      return tasks.map((task,position)=>{
        if(position===index){
          return{
            ...task, completed:!task.completed
          }
        }
        return task;
      })
    })
  }

  addTask(tittle:string){
    const newTask={
      id:Date.now(),
      title:tittle,
      completed:false
    };
    this.tasks.update((tasks)=>[...tasks,newTask]);
  }


  deleteTask(index:number){
    this.tasks.update((tasks)=>tasks.filter((task,position)=>position!== index))
  }
}
