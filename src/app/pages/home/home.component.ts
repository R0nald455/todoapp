import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {Task} from '../../models/task.model'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
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


    newTaskCtrl=new FormControl('',{
      nonNullable:true,
      validators:[
        Validators.required,
        
      ]
    })
  changeHandler(){
    if(this.newTaskCtrl.valid){
      const value= this.newTaskCtrl.value.trim();
      if(value !== ''){
        this.addTask(value);
        this.newTaskCtrl.setValue(' ')
      }
    }
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
