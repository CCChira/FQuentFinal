import { Component, Input, OnInit } from '@angular/core';  //  , HostListener
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component( {
  selector: 'app-articol',
  templateUrl: './articol.page.html',
  styleUrls: ['./articol.page.scss'], })

export class ArticolPage implements OnInit {
  @Input() private genArt: string;
  @Input() private titluArt: string;
  @Input() private srcimgArt: boolean;
  @Input() private zonaArt: string;
  @Input() private categorieArt: string;
  @Input() private descriereArt: string;
  @Input() private contactArt: string;
  @Input() private pretpeziArt: string;
  @Input() private garantieArt: boolean;

  constructor(private modalCtrl: ModalController, private router: Router) { }

/*@HostListener('document:ionBackButton', ['$event'])
  private async overrideHardwareBackAction($event: any) {
      await this.modalCtrl.dismiss(); }*/

  private cardSwitch: boolean = true;
  private Mareste() { this.cardSwitch = !this.cardSwitch; }

  async dismissArticolModal() { await this.modalCtrl.dismiss(); }

  ngOnInit() { }
}
