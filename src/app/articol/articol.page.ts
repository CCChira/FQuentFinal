import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component( {
  selector: 'app-articol',
  templateUrl: './articol.page.html',
  styleUrls: ['./articol.page.scss'], })

export class ArticolPage implements OnInit {
  @Input()
    private genArt: any;
  @Input()
    private titluArt: any;
  @Input()
    private srcimgArt: boolean;
  @Input()
    private zonaArt: any;
  @Input()
    private categorieArt: any;
  @Input()
    private descriereArt: any;
  @Input()
    private contactArt: any;
  @Input()
    private pretpeziArt: any;
  @Input()
    private garantieArt: boolean;

  constructor(private modalCtrl: ModalController, private router: Router) { }

  private cardSwitch: boolean = true;
  private Mareste() {
    this.cardSwitch = !this.cardSwitch; }

  async dismissArticolModal() {
    await this.modalCtrl.dismiss(); }

  ngOnInit() { }
}
