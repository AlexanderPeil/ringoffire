import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {
  // It's a private router because we want to use this one only in this component (start-screen.comp)
  constructor(private firestore: AngularFirestore, private router: Router) { }

  ngOnInit(): void {

  }


/**
 * Starts a new game and navigates to the game page.
 * @memberof SomeClass
 */
  newGame() {
    let game = new Game();
    this.firestore.collection('games').add(game.toJson()).then((gameInfo: any) => {
      this.router.navigateByUrl('/game/' + gameInfo.id);      
    });

  }

}
