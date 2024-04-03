import { Routes } from '@angular/router';
import { OldbergComponent } from './oldberg/oldberg.component';
import { AboutComponent } from './about/about.component';
import { MusicComponent } from './music/music.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    { path: 'oldberg', component: OldbergComponent },
    { path: 'about', component: AboutComponent },
    { path: 'music', component: MusicComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: '**', redirectTo: '/oldberg' },
];
