import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent {

  allProfilePictures = [
    '../../assets/img/bear.svg',
    '../../assets/img/bull.svg',
    '../../assets/img/profile.png',
    '../../assets/img/trex.svg'
  ];

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) {}

}
