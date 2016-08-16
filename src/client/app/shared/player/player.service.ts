import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable()
export class PlayerService {
	private players: Player[] = [];

	constructor() {
		let persistentPlayers = JSON.parse(localStorage.getItem('kickball') || '[]');
		this.players = persistentPlayers.map((player: {name: string}) => {
			let ret = new Player(player.name);
			return ret;
		});
	}
	getPlayers() {
		return Promise.resolve(this.players);
	}

	remove(player:Player) {
		this.players.splice(this.players.indexOf(player),1);
		this.updateStorage();
	}
	add(name:String) {
		this.players.push(new Player(name));
		this.updateStorage();
	}

	private updateStorage() {
		localStorage.setItem('kickball', JSON.stringify(this.players));
	}
}
