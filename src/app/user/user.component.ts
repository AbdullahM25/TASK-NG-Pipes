import { Component, Input } from '@angular/core';
import { User } from '../../data/users';
import { StatusPipe } from '../status.pipe';
import * as p from '@angular/common';
import { RecentLoginPipe } from '../recent-login.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    StatusPipe,
    p.DatePipe,
    p.CurrencyPipe,
    p.TitleCasePipe,
    RecentLoginPipe,
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() data!: User;
}
