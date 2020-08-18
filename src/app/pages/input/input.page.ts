import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

	nombre:string;
	user = {
		email: '',
		password: ''
	};

	constructor() { }

  	ngOnInit() {
  	}

  	submit(){
  		console.log("form Submit");
      console.log(this.user);
  	}

}
