import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CertificacionesComponent } from '../certificaciones/certificaciones.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // See: HomePageRoutingModule
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  entryComponents:[]
})
export class HomePageModule {}
