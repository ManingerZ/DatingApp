import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe(response =>
      {
        this.router.navigateByUrl('/members');
      }, error =>
      {
        console.log(error);
        console.log(error.error.errors);
        this.toastr.error(error.error.errors == null ? error.error : 'Missing Info');
      })
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
