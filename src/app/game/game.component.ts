// @ts-nocheck
import { Component, OnInit, inject } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})


/**
 * Represents the game component. 
 * pickCardAnimation: A flag indicating whether the pick card animation is active.
 * currentCard: The current card selected.
 * game: Game:   The game instance.
 * @implements {OnInit}
 */
export class GameComponent implements OnInit {
  items$: Observable<any[]>;
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  constructor( private firestore: Firestore, public dialog: MatDialog) {
    // const aCollection = collection(this.firestore, 'games');
    // this.items$ = collectionData(aCollection);
  }

  ngOnInit(): void {
    this.newGame();
    this.firestore.collection('items').valueChanges().subscribe((game) => {
      console.log('game update', game);
    });
  }

  newGame() {
    this.game = new Game();
  }


  /**
   * Takes a card from the game stack and updates the current card, current player, and played cards.
   * If a pick card animation is not already in progress.
   */
  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;

      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }


  /**
   * Takes a card from the game stack and updates the current card, current player, and played cards.
   * If a pick card animation is not already in progress.
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {

    });

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }
}