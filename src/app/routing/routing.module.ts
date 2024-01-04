import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QRCODEComponent } from '../qrcode/qrcode.component';
import { MusicComponent } from '../music/music.component';

const rutas: Routes = [
  { path: '', component: QRCODEComponent },
  { path: 'music', component: MusicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class RoutingModule {}
