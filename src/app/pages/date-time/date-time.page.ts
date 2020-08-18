import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

	birthday:Date = new Date();
	customPickerOptions;
	customDate;

	constructor() { }

	ngOnInit() {
		this.customPickerOptions = {
			buttons: [{
	        text: 'Save',
	        handler: (evt) => {
	        	console.log(evt);
	        	console.log('Clicked Save!')
	        }
	      }, {
	        text: 'Log',
	        handler: () => {
	          console.log('Clicked Log. Do not Dismiss.');
	          return false;
	        }
	      }]
	    }
	}

	changeDatetime(event){
		console.log({event});
		console.log('Date', new Date(event.detail.value));
	}

}
