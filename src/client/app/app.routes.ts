import { Routes } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { LineupRoutes } from './+lineup/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...LineupRoutes,
];
