import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'], })

export class HomePage {
  private tBarHide: boolean = true;
  private tBarIcon1Hide: boolean = true;
  private tBarTextCrt = 'Welcome to Our App!';
  private tBarIcon2Hide: boolean = true;
  private fBarHide: boolean = true;
  private fBarIcon1Hide: boolean = false;
  private fBarTextCrt = '2019© by Flexiloquent™';
  private fBarIcon2Hide: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() { }
}
