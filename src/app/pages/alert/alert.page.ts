import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

	title:string = "Alert Page";

  	constructor(private alertController:AlertController) { }

	ngOnInit() {
  	}

  	async presentAlert() {
	    const alert = await this.alertController.create({
	      header: 'Alert',
	      subHeader: 'Subtitle',
	      message: 'This is an alert message.',
	      backdropDismiss: false,
	      buttons: [
	        {
	          text: 'Cancel',
	          role: 'cancel',
	          cssClass: 'secondary',
	          handler: () => {
	            console.log('Click Cancel');
	          }
	        }, {
	          text: 'Ok',
	          handler: () => {
	            console.log('Click Okay');
	          }
	        }
	      ]
	    });

    	await alert.present();
	}

	async showInput() {
	    const alert = await this.alertController.create({
			header: 'Renombrar título',
			message: 'Escribe el nuevo título',
			backdropDismiss: false,
			inputs: [
			    {
			      name: 'title',
			      type: 'text',
			      placeholder: 'Nuevo Titulo'
			    }
			],
	      	buttons: [
	      		{
	          		text: 'Cancel',
		          	role: 'cancel',
		          	cssClass: 'secondary',
		          	handler: () => {
		            	console.log('Click Cancel');
		          	}
		        },{
		          	text: 'Cambiar Titulo',
		          	handler: (text) => {
		          		this.title = text.title;
		            	console.log({text});
		          	}
		        }
			]
	    });

    	await alert.present();
	}


}
