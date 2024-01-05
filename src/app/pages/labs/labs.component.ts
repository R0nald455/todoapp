import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  title = 'todoapp';
  welcome="que se dice"
  tasks=signal([
    "preparar",
    "extender",
    "evaluar"])

constructor(){
  this.colorCtrl.valueChanges.subscribe(value=>{console.log(value)})
}



colorCtrl= new  FormControl();
widthCtrl= new FormControl(50,{
  nonNullable:true,
});
nameCtrl= new FormControl('pedro',{
  nonNullable:true,
  validators:[
    Validators.required,
    Validators.minLength(3)
  ]
});
name=signal('ronald')
age=18
disabled=false
img='https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'


person=signal({
  'name':'ronald',
  'age':18,
  'avatar':'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'

})

changeName(event:Event){
  const input= event.target as HTMLInputElement
  const newValue = input.value
  this.person.update(prevstate=>{
    return {...prevstate,
      name: newValue}
  })
}

clickHandler(){
  alert('hola')
}


changeHandler(event: Event){
  const input= event.target as HTMLInputElement
  const newValue = input.value
  this.name.set(newValue)
  console.log(input.value)
}

keydownHandler(event:Event){
  const input= event.target as HTMLInputElement
  console.log(input.value)
}

}
