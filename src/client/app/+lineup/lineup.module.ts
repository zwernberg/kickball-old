import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LineupComponent } from './lineup.component';
import { PlayerService } from '../shared/player/index';
import {Dragula, DragulaService} from 'ng2-dragula/ng2-dragula/';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [LineupComponent, Dragula],
    exports: [LineupComponent],
    providers: [PlayerService, DragulaService]
})

export class LineupModule { }
