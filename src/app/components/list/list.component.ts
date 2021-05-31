import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import User from '../../models/User';
import { ReadComponent } from '../read/read.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {
  displayedColumns: string[] = ['quantidade', 'marca' ,'modelo' , 'placamae', 'processador', 'memoria', 'hd', 'id'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private userService: UserService,
    private bottomSheet: MatBottomSheet,
    public dialog: MatDialog
  ) {
    this.getUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getUsers(): void {
    const users: User[] = [];
    const usersLocalStorage = this.userService.getAll();
    for (const key in usersLocalStorage) {
      if (Object.prototype.hasOwnProperty.call(usersLocalStorage, key)) {
        const element = usersLocalStorage[key];
        users.push(element);
      }
    }

    this.dataSource = new MatTableDataSource(users);
  }

  openReadBottomSheet(row): void {
    this.bottomSheet.open(ReadComponent, { data: row });
  }

  openEditDialog(row): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.getUsers();
    });
  }

  openDeleteBottomSheet(row): void {
    this.bottomSheet.open(DeleteComponent, { data: row });
  }
}
