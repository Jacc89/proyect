import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-remi',
  templateUrl: './list-remi.component.html',
  styleUrls: ['./list-remi.component.css']
})
export class ListRemiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  typesOfShoe: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

}
