import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular'
import { PopoverComponent } from '../../components/popover/popover.component'

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

	constructor(private _popoverController:PopoverController) { }

  	ngOnInit() {
  	}


  	async showPop(ev){
  		const popover = await this._popoverController.create({
  			component: PopoverComponent,
  			event: ev,
  			mode: 'ios',
  			backdropDismiss: false
      		//translucent: true
  		});

  		await popover.present();

  		//Obtiene la variable hasta q termina el dismiss
  		//const data = await popover.onDidDismiss();

  		//Obtiene la variable una vez que inicie el dismiss
  		const data = await popover.onWillDismiss();

  		console.log("Padre:",data);
  	}
}
