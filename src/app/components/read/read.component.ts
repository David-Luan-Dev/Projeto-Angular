import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log('data ---' , this.data);
  }

}
