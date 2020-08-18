import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

	components:Observable<Componente[]>; 

  	constructor(private _menu:MenuController, private _api:DataService) { }

  	ngOnInit() {
  		this.components = this._api.getMenuOptions();
  	}

  	toggleMenu(){
  		this._menu.toggle();
  	}

}

