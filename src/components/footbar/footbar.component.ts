import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.scss'], } )

export class FootbarComponent implements OnInit {
  @Input() private fBarIcon1: boolean;
  @Input() private fBarText: string;
  @Input() private fBarIcon2: boolean;
  @Input() private fBarPhoto: any;

  constructor(private router: Router) { }

  ngOnInit() {}
}
