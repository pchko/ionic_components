import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

	perc:number = 0;

  	constructor() { }

  	ngOnInit() {
  	}

  	changeRange(event){
  		console.log(event);
  		this.perc = event.detail.value/100;
  	}

}
