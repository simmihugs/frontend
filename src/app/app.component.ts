import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from 'rxjs';

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
    breeds$: Observable<User[]>;
    a: User[];
    b:string[] = [];

    getBreeds(): Observable<User[]> {
  	return this.http.get<User[]>(this.url + '/list-users');
    }

    getUsers() {
	this.http.get<User[]>(this.url + '/list-users').subscribe(data => { 
	    this.a = data;
	    //console.log(data);
	    for (let k in data) { 
		//console.log(JSON.stringify(data[k])); 
		this.b.push(JSON.stringify(data[k]));
	    } 
	} );
    }

    constructor(private http: HttpClient) {
	//this.breeds$ = this.getBreeds();
	//this.getUsers();
	//for (let i in this.a) { 
	    //console.log(i);
	    //console.log(this.a[i].name); 
	//}
    }

    ngOnInit() {

    }

}
