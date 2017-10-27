import { ProfileComponent } from './components/profile/profile.component';
import { FriendsComponent } from './components/friends/friends.component';
import { AuthGuard } from './authguard';
import { WallComponent } from './components/wall/wall.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'loginComponent',
        component: LoginComponent,
        data: { title: 'Login' }
    },
    {
        path: 'wallComponent',
        component: WallComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'friendsComponent',
        component: FriendsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profileComponent',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'pageNotFound',
        component: PageNotFoundComponent
    },
    {
        path: '',
        redirectTo: '/loginComponent',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/pageNotFound',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true, // <-- debugging purposes only
              useHash: true } 
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }