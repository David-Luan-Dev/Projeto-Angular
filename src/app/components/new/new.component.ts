import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  public formCreate: any;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.formCreate = this.fb.group({
      id: [uuidv4(), Validators.required],
      quantidade: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      placamae: ['', Validators.required],
      processador: ['', Validators.required],
      memoria: ['', Validators.required],
      hd: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.userService.postUser(this.formCreate.value);
    this.showSnackMsgSuccess();
    this.router.navigate(['list']);
  }

  showSnackMsgSuccess(): void {
    this.snackBar.open('Item Adicionado Com Sucesso!', '🥳', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

}
