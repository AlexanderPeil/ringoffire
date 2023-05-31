import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {
  // It's a private router because we want to use this one only in this component (start-screen.comp)
  constructor(private router: Router) { }

  ngOnInit(): void {

  }


/**
 * Starts a new game and navigates to the game page.
 * @memberof SomeClass
 */
  newGame() {
    this.router.navigateByUrl('/game');
  }

}
