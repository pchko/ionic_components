import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list-sliding',
  templateUrl: './list-sliding.page.html',
  styleUrls: ['./list-sliding.page.scss'],
})
export class ListSlidingPage implements OnInit {

	@ViewChild('lista',{static:false}) lista:IonList;

	list:any;

	constructor(private dataService:DataService) { }

  	ngOnInit() {
		this.list = this.dataService.getUsers();
  	}

  	share(item){
  		console.log(item);
  		this.lista.closeSlidingItems();
  	}

  	favorite(item){
  		console.log(item);
  		this.lista.closeSlidingItems();
  	}

  	trash(item){
  		console.log(item);
  		this.lista.closeSlidingItems();
  	}

}
