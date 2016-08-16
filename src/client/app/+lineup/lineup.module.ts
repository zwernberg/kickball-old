import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LineupComponent } from './lineup.component';
import { PlayerService } from '../shared/player/index';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [LineupComponent],
    exports: [LineupComponent],
    providers: [PlayerService]
})

export class LineupModule { }
