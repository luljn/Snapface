import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './face-snaps/components/single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent},
    { path: 'create', component: NewFaceSnapComponent}
];
