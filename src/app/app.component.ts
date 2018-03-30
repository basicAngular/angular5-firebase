import { Component, OnInit } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireDatabase]
})
export class AppComponent implements OnInit {
  title = 'Angular Firebase Tutorial';
  user = {};
  users: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {}


  ngOnInit() {
    this.users = this.db.list('/users');
  }

  onSubmit() {
    this.users.push(this.user);
    this.user = {};
  }

  deleteUser(key: string){
    if (confirm('Are you sure to delete this record ?') == true) {
      this.users.remove(key);
      this.user = {};
    }
  }

  editUser(key: string){
    this.user = this.db.object('/users/'+key);
    this.user.subscribe(snapshot => {
      this.user = snapshot;
    });
  }

  updateActive(key: string){
    this.users.update(key,this.user);
    this.user = {};
  }

  resetForm(){
    this.user = {};
  }

}