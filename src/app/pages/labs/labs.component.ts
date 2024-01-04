import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
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






name=signal('ronald')
age=18
disabled=false
img='https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'


person={
  'name':'ronald',
  'age':18,
  'avatar':'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg'

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
