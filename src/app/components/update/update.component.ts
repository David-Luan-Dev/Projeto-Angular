import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public formCreate: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UpdateComponent>,
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('DATA ---- ', this.data);
    this.buildForm(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  buildForm(data): void {
    const { id, quantidade, marca, modelo, placamae, processador, memoria, hd , password } = data;
    this.formCreate = this.fb.group({
      id: [id, Validators.required],
      quantidade: [quantidade, Validators.required],
      marca: [marca, Validators.required],
      modelo: [modelo, Validators.required],
      placamae: [placamae, Validators.required],
      processador: [processador, Validators.required],
      memoria: [memoria, Validators.required],
      hd: [hd, Validators.required],
      password: [password, Validators.required]
    });
  }

  onSubmit(): void {
    this.userService.updateUser(this.formCreate.value);
    this.showSnackMsgSuccess();
    this.router.navigate(['list']);
    this.onNoClick();
  }

  showSnackMsgSuccess(): void {
    this.snackBar.open('Item Editado com Sucesso', '🥳', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

}
