import { Component } from '@angular/core';
import { TrackInfo } from '../track-info';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
})
export class TracksComponent {
  trackName: string = '';
  displayedReigions: string[] = [];
  trakNames: TrackInfo[] = [
    { Name: 'Front-end', Reigions: ['Banha', 'Menofia','smart'] },
    { Name: 'MEARN', Reigions: ['Mansoria', 'Cairo'] },
    { Name: 'testing', Reigions: ['not opent this year'] },
    { Name: 'Embeded', Reigions: ['Cairo'] },
    { Name: 'DotNet', Reigions: ['Menofia', 'Mansoria'] },
  ];
  displayRegions() {
    var selectedTrack = this.trakNames.find(
      (obje) => obje.Name == this.trackName
    );
    this.displayedReigions = selectedTrack ? selectedTrack.Reigions : [];
   
  }
}
