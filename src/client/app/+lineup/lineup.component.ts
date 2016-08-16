import { Component, OnInit } from '@angular/core';
import { Player, PlayerService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'kickball-lineup',
  templateUrl: 'lineup.component.html',
  styleUrls: ['lineup.component.css'],
  providers: [PlayerService]
})

export class LineupComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  players: Player[];
  newPlayerText: string;

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayers();

  }

  getPlayers() {
    this.playerService.getPlayers().then(players => this.players = players);
  }

  addPlayer() {
    this.playerService.add(this.newPlayerText);
    this.newPlayerText = '';
  }

  removePlayer(player: Player) {
    this.playerService.remove(player);
  }

  updatePlayers(event: Event) {
    console.log('test');
  }
}
