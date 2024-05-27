import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';


export const routes: Routes = [
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    { path: 'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule)},
    { path: '', component: LandingPageComponent}
];
