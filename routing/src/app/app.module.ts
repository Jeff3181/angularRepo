import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user.details/user.details.component';

const APP_ROUTE: Route[] = [
  { path:'', component:HomepageComponent },
  { path:'users', component: UserComponent, 
    children:[
      { path: ':id', component: UserDetailsComponent }
    ]
  },
  { path: '**', redirectTo: '/users' }
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
