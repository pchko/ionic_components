import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

	loading:any;

	constructor(private _loadingCtrl:LoadingController) { }

	ngOnInit() {
		this.presentLoading('Please Wait...');

		setTimeout( () => {
			this.loading.dismiss();
		}, 3000)
  	}

  	async presentLoading(message:string) {
		this.loading = await this._loadingCtrl.create({
		  message
		  //duration: 2000
		});
		
		return this.loading.present();
	}

}
