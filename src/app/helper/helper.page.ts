import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-helper',
  templateUrl: './helper.page.html',
  styleUrls: ['./helper.page.scss'], } )

export class HelperPage implements OnInit {
  private searchhelp: string = '';
  private searchfaq: string = '';
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt: string = 'Help and FAQ';
  private tBarIcon2Hide: boolean = false;
  private fBarHide: boolean = false;
  private fBarIcon1Hide: boolean = true;
  private fBarTextCrt: string = '2019© by Flexiloquent™';
  private fBarIcon2Hide: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() { }
}
