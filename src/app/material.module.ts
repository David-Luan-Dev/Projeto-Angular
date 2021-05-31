import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';



const MATERIAL = [
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatIconModule,
  MatBottomSheetModule,
  MatListModule,
  MatDialogModule,

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL
  ],
  exports: [
    ...MATERIAL
  ]
})
export class MaterialModule { }
