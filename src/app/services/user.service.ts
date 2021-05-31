import { Injectable } from '@angular/core';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  postUser(data: User): boolean {
    if (localStorage.getItem('user')) {
      const item = JSON.parse(localStorage.getItem('user'));
      item[data.id] = data;
      localStorage.setItem('user', JSON.stringify(item));
    } else {
      const newUser = {
        [data.id]: data
      };
      localStorage.setItem('user', JSON.stringify(newUser));
    }
    return true;
  }

  updateUser(data: User): boolean {
    if (localStorage.getItem('user')) {
      const item = JSON.parse(localStorage.getItem('user'));
      item[data.id] = data;
      localStorage.setItem('user', JSON.stringify(item));
      return true;
    } else {
      return false;
    }
  }

  delete(id): boolean {
    if (localStorage.getItem('user')) {
      const item = JSON.parse(localStorage.getItem('user'));
      delete item[id];
      localStorage.setItem('user', JSON.stringify(item));
      return true;
    } else {
      return false;
    }
  }

  getAll(): User {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'));
    }
  }
}
