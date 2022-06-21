import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class GlobalService {
 user = new BehaviorSubject(this.theItem);
 userId = new BehaviorSubject(this.UserId);

 set theItem(value) {
   this.user.next(value); // this will make sure to tell every subscriber about the change.
   localStorage.setItem('user', JSON.stringify(value));
 }

 get theItem() {
   return localStorage.getItem('user');
 }

 get UserId(){
   return JSON.parse(localStorage.getItem('user')!).id
 }

}
