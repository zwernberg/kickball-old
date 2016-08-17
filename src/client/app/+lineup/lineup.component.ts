import { Component, OnInit } from '@angular/core';
import { Player, PlayerService } from '../shared/index';
import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'kickball-lineup',
  templateUrl: 'lineup.component.html',
  styleUrls: ['lineup.component.css'],
  directives: [ Dragula ],
  providers: [ DragulaService ]
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
  constructor(private playerService: PlayerService, private dragulaService: DragulaService) {
    this.dragulaService.setOptions('first-bag', {
      removeOnSpill:true
    });

    dragulaService.dropModel.subscribe((value:any) => {
      console.log(`drag: ${value[0]}`);
      this.onDropModel(value.slice(1));
    });

  }

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

  private onDropModel(args:any) {
    this.playerService.updateLineup(this.players);
  }

}
