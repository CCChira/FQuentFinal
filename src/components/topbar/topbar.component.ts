import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthService } from '../../providers/auth-tools/auth-tools';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'], } )

export class TopbarComponent implements OnInit {
  @Input()
    private tBarIcon1: boolean;
  @Input()
    private tBarText: any;
  @Input()
    private tBarSearch: any;
  @Input()
    private tBarIcon2: boolean;

  @Output()
    topbarModif = new EventEmitter();

  public searchTermBar: string = '';
  public Trimite(){
    this.topbarModif.emit(this.searchTermBar); }
  public Reseteaza(){
    this.searchTermBar = ''; }

  private name = 'Alessia Bidian';
  private email = 'alessia.bidian@yahoo.com';
  private password;
  private phone = '0723 147 497';
  constructor(private router: Router) { }

  ngOnInit() {}
}
