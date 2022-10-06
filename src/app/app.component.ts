import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

interface User {
    name: string;
    password: string;
    profession: string;
    id: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    url = 'http://localhost:8081';

    //TODO: Use Observable, if it is worth it
    //TODO What how to get content out of Observable???
    //users$: Observable<User[]>;

    users: User[] = [];

    getBreeds(): Observable<User[]> {
  	    return this.http.get<User[]>(this.url + '/list-users');
    }

    getUsers() {
	    this.http.get<User[]>(this.url + '/list-users').subscribe(data => { 
	        for (let k in data) { 
                this.users.push(data[k]);
	        } 
	    });
    }

    constructor(private http: HttpClient) {
    }

    ngOnInit() {

    }

}
