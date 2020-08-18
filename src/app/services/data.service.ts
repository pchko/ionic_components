import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {


	constructor(private _api:HttpClient) { }

	getUsers(){
		return this._api.get("https://jsonplaceholder.typicode.com/users");
	}

	getMenuOptions(){
		return this._api.get<Componente[]>('/assets/data/menu.json');
	}
}
