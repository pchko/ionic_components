import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

	items = Array(30);

  	constructor(private _popoverCtrl:PopoverController) { }

  	ngOnInit() {}

  	itemClick(i){

  		this._popoverCtrl.dismiss({
  			'item' : i
  		});
  	}

}
