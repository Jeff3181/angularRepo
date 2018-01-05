import {LogService } from './log.service';
import {Injectable } from '@angular/core';

@Injectable()
export class PanierService {

	public panier: string[] = [];


	//injection du service LogService
	constructor(private logService: LogService){

	}

	add(aliment: string){
		this.panier.push(aliment);
		this.logService.log("New aliment :" + aliment);
	}

	removeAliment(index: number){
		this.logService.log("Delete aliment : " + this.panier[index]);
		this.panier.splice(index, 1);
	}

}