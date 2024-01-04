import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css'],
})
export class QRCODEComponent implements OnInit {
  value = '';
  QRCodeImgResult!: string;
  imagenDefault =
    'data:image/png;base64,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';

  ngOnInit(): void {
    document.addEventListener('contextmenu', e => {
      e.preventDefault();
    });
  }

  constructor(private http: HttpClient) {}

  generarCodigo() {
    if (this.value == '') {
      this.QRCodeImgResult = this.imagenDefault;
      return;
    }
    QRCode.toDataURL(this.value, (error, url) => {
      if (error) {
        return console.error('Ha ocurrido un error', error);
      }
      this.QRCodeImgResult = url;
    });
  }

  DownloadAndShare() {
    if (this.QRCodeImgResult == '') return;
  }

  rotate!: boolean;
  Aleatorio() {
    this.rotate = true;

    this.http
      .get('https://baconipsum.com/api/?type=meat-and-filler')
      .subscribe((respuesta: any) => {
        this.value = respuesta[0];
        this.generarCodigo();
      });

    const finishRotate = () => {
      this.rotate = false;
    };
    setTimeout(finishRotate, 2000);
  }
}
