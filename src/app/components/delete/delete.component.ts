import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log('data delete---' , this.data);
  }

  delete(): void {
    const id = this.data.id;
    const response = this.userService.delete(id);
    if (response) {
      this.showSnackMsgSuccess();
    } else {
      this.showSnackMsgError();
    }
  }

  showSnackMsgSuccess(): void {
    this.snackBar.open('Deletado com Sucesso!!', '🥳', {
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
    window.location.reload();
  }

  showSnackMsgError(): void {
    this.snackBar.open('Ocurrio un problema al eliminar el usuario', '😞', {
      duration: 1000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

}
