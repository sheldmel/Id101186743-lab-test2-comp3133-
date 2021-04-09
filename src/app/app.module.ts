import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button' 
import { AppComponent } from './app.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DataResolverService } from './resolver/data.resolver'
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
const appRoutes: Routes = [
  {
      path: '',
      //redirectTo: '/missionlist',
      pathMatch: 'full',
      component: MissionlistComponent
  },  
  {
    path: 'missionDetails/:id',
    resolve: {
      special: DataResolverService
    },
    //redirectTo: '/missionlist',
    pathMatch: 'full',
    component: MissiondetailsComponent
},
  ];
@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissiondetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
