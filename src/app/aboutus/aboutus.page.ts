import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'], } )

export class AboutusPage implements OnInit {
  private tBarHide: boolean = false;
  private tBarIcon1Hide: boolean = false;
  private tBarTextCrt: string = 'About Us';
  private tBarIcon2Hide: boolean = false;
  private fBarHide: boolean = false;
  private fBarIcon1Hide: boolean = true;
  private fBarTextshowCrt: boolean = true;
  private fBarTextCrt: string = '2019© by Flexiloquent™';
  private fBarIcon2Hide: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() { }
}
